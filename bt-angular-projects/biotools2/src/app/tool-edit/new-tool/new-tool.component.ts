import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tool } from '@bt/core/tool/tool.model';
import { ToolEditService } from '../tool-edit.service';



/**
 * To FIX:
 * If the user logs out on a different machine then if we go to the new tool page we won't make an API call and this won't see 
 *  that the token is invalid and the user might fill in an entire tool before clicking valdiate or save , case in which
 *    the user will be redirected to login and their work will be lost
 * We can try to:
 *  - try pinging once the user api once in a while with the token to see if the request is succesful , if 401 it will be caught and the session terminated
 *    - migth be done in a middle of some work and that is problematic
 *  - do a request to the user when going on the new tool page to see if the token and user are ok
 *  - save the tool in local storage and when they go to create a new tool ask if they want to load the tool from local storage or not
 *    - maybe there should be a clear button that resets the curation process (kinda like a refresh , but just starting with an empty object on new tool)
 *      - or the initial tool value for tool editing
 *  - leave as is, if the user logs out from a different service then they know what they are doing
 */ 





@Component({
  selector: 'bt-new-tool',
  templateUrl: './new-tool.component.html',
  styleUrls: ['./new-tool.component.scss']
})
export class NewToolComponent implements OnInit, OnDestroy {
  tool: Tool;
  error: any = null;

  constructor(private toolEditService: ToolEditService, private router: Router) {
    this.tool = {
      name: '',
      biotoolsID: '',
      homepage: '',
      description: ''
    }
   }

  ngOnInit(): void {}

  convertJsonStringToObject(toolString: string){
    return JSON.parse(toolString);
  }

  updateToolObject(data: string){
    this.tool = this.convertJsonStringToObject(data);
  }

  // [Note]: To remove, only for testing
  addDot(){
    this.tool = {
      ...this.tool, description: this.tool.description + '.'
    }
  }

  private handleError(e: any){
    this.error = e;
  }

  onValidate(){
    this.toolEditService.validateCreateTool(this.tool).subscribe({
      next: (t: Tool) => {
        this.error = null;
      },
      error: (e: HttpErrorResponse) => {
        this.handleError(e.error);
      }
    });
  }

  onSave(){
    this.toolEditService.createTool(this.tool).subscribe({
      next: (t: Tool) => {
        this.error = null;
        this.router.navigate(['edit-tool',t.biotoolsID]);
      },
      error: (e: HttpErrorResponse) => {
        this.handleError(e.error);
      }
    });
  }

  ngOnDestroy(): void {
    
  }

}
