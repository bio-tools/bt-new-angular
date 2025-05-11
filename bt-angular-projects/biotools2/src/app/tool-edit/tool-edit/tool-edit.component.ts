import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ToolEditService } from '../tool-edit.service';
import { RemoveEmptyService } from '@bt/core/utils/remove-empty.service';
import { ToolService } from '@bt/tool-card/tool.service';
import { Tool, ToolEditData } from '@bt/core/tool/tool.model';
import { UserService } from '@bt/core/user/user.service';
import { Subscription } from 'rxjs';
import { User } from '@bt/core/user/user.model';
import { ToolEditRightsService } from '@bt/core/utils/tool-edit-rights.service';

@Component({
  selector: 'bt-tool-edit',
  templateUrl: './tool-edit.component.html',
  styleUrls: ['./tool-edit.component.scss']
})
export class ToolEditComponent implements OnInit, OnDestroy {
  public biotoolsID: string;
  private idValue = 'biotoolsID';
  tool: Tool | null = null;
  error: any = null;
  userSub: Subscription | null = null;
  authenticatedUser: User | null = null;
  canEditTool: boolean = false;
  
  toolEditData: ToolEditData | null = null;

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private toolService: ToolService, 
    private removeEmptyService: RemoveEmptyService, 
    private toolEditService: ToolEditService,
    private userService: UserService,
    private toolEditRightsService: ToolEditRightsService
  ) {
    this.biotoolsID = this.route.snapshot.params[this.idValue];
  }

  ngOnInit() {
    this.biotoolsID = this.route.snapshot.params[this.idValue];  

    // no need to unsubscribe as in the case of ActivatedRoute Angular does it for us
    this.route.params.subscribe(
      (param: Params) => {
        this.biotoolsID = param[this.idValue];
        
        // look at user to see if they have rights to be here
        this.userSub = this.userService.user.subscribe({
          next: (user: User | null) => {
            this.authenticatedUser = user;
          }
        });

        // get tool info
        this.toolService.getTool(this.biotoolsID).subscribe({
          next: (tool: Tool) => {
            if (tool.owner && tool.editPermission?.type){
              this.toolEditData = new ToolEditData(tool.owner, tool.editPermission?.type, tool.editPermission?.authors);
            }

            this.tool = tool;
            // remove empty properties, arrays etc, they will trigger validation error in backend if not
            // also this is cleaner for the JSON editor
            this.tool = this.removeEmptyService.removeEmpty(this.tool);
            
            // see if user can edit this tool
            if (this.tool && 
                this.authenticatedUser &&  
                this.toolEditData && 
                !this.toolEditRightsService.canEditTool(this.toolEditData, this.authenticatedUser))
            {
              this.router.navigate(['/', this.biotoolsID]);
            }

          },
          error: (e: HttpErrorResponse) => {
             // error: tool not found, should redirect to 404
             this.tool = null;
             console.log('error in getting tool:', e);
             if (e.status === 404){
               this.router.navigate(['404']);
               return;
             }
          }
        });
      }
    );
  }

  convertJsonStringToObject(toolString: string){
    return JSON.parse(toolString);
  }
  
  updateToolObject(data: string){
    this.tool = this.convertJsonStringToObject(data);
  }

  private handleError(e: any){
    this.error = e;
  }

  putRandomName(){
    let r = (Math.random() + 1).toString(36).substring(7);
    
    if (!this.tool){
      return
    }
    
    this.tool = {...this.tool, name: r};

  }

  onValidate(){
    if (!this.tool){
      this.handleError({Missing: 'Tool object'});
      return;
    }
    this.toolEditService.validateUpdateTool(this.biotoolsID, this.tool).subscribe({
      next: (t: Tool) => {
        this.error = null;
      },
      error: (e: HttpErrorResponse) => {
        this.handleError(e.error);
      }
    });
  }

  onSave(){
    if (!this.tool){
      this.handleError({Missing: 'Tool object'});
      return;
    }
    
    this.toolEditService.updateTool(this.biotoolsID, this.tool).subscribe({
      next: (tool: Tool) => {
        this.error = null;

        // this should only happen in rare cases with issues on the server
        if (!tool){
          this.handleError({Missing: 'Could not retrieve tool after update'});
          return;
        }
        
        // maybe in the meantime the owner has changed on the server
        if (tool.owner && tool.editPermission?.type){
          this.toolEditData = new ToolEditData(tool.owner, tool.editPermission?.type, tool.editPermission?.authors);
        }

        this.tool = tool;

        this.tool = this.removeEmptyService.removeEmpty( this.tool );
        
      },
      error: (e: HttpErrorResponse) => {
        this.handleError(e.error);
      }
    });
  }

  onDelete(){
    this.toolEditService.deleteTool(this.biotoolsID).subscribe({
      next: (_) => {
        this.error = null;
        this.router.navigate(['t']);
      },
      error: (e: HttpErrorResponse) => {
        this.handleError(e.error);
      }
    });
  }

  goToEntryPage(){
    this.router.navigate(['/',this.biotoolsID]);
  }

  ngOnDestroy(): void {
    this.userSub?.unsubscribe();

  }
}