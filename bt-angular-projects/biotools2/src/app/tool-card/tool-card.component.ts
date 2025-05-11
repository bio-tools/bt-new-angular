import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Tool } from '@bt/core/tool/tool.model';
import { ToolService } from './tool.service';
import { UserService } from '@bt/core/user/user.service';
import { User } from '@bt-core/user/user.model';
import { UserRequestData, UserRequests } from '@bt/core/user/user.model';



@Component({
  selector: 'bt-tool-card',
  templateUrl: './tool-card.component.html',
  styleUrls: ['./tool-card.component.scss']
})
export class ToolCardComponent implements OnInit, OnDestroy {

  public biotoolsID: string;
  private idValue = 'biotoolsID';
  private userSub: Subscription | null = null;
  private requestsSub: Subscription | null = null;
  authenticatedUser: User | null = null;
  sentRequests: UserRequestData[] = [];
  tool: Tool | null = null;
  

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private httpClient: HttpClient,
    private toolService: ToolService,
    private userService: UserService
  ) {
    this.biotoolsID = this.route.snapshot.params[this.idValue];

  }

  ngOnInit() {
    this.biotoolsID = this.route.snapshot.params[this.idValue];

    this.userSub = this.userService.user.subscribe({
      next: (user: User | null) => {
        this.authenticatedUser = user;
      }
    });

    this.requestsSub = this.userService.requests.subscribe({
      next: (requests: UserRequests | null) => {
        if (requests){
          this.sentRequests = requests.requests.sent.filter((r) => !r.completed);
        }
      }
    });

    // no need to unsubscribe as in the case of ActivatedRoute Angular does it for us
    this.route.params.subscribe(
      (param: Params) => {
        this.biotoolsID = param[this.idValue];
        
        this.toolService.getTool(this.biotoolsID).subscribe({
          next: (tool: Tool) => {
            this.tool = tool;
          },
          error: (e: HttpErrorResponse) => {
             // error: tool not found, should redirect to 404
             console.log('Error in getting tool', e);
          }
        });
      }
    );
  }


  canUpdateTool(): boolean {
    // if user is not authenticated we don't show the button at all
    if (!this.authenticatedUser){
      return false;
    }
    
    // if authenticated user is the owner
    if (this.authenticatedUser.username === this.tool?.owner){
      return true;
    }

    // if authenticated user has edit permissions
    if (this.tool?.editPermission?.authors.includes(this.authenticatedUser.username)){
      return true;
    }

    if (this.tool?.editPermission?.type.toLowerCase() === 'public'){
      return true;
    }

    // if authenticated user is superuser
    if (this.authenticatedUser.is_superuser){
      return true;
    }

    return false;
  }

  isNotOwner(): boolean {
    // we return true so that the non authenticated users can see the button
    if (!this.authenticatedUser){
      return true;
    }

    // user is authenticated, but user is not the owner
    if (this.authenticatedUser.username !== this.tool?.owner){
      return true;
    }    
    
    return false;
  }

  needsEditRights(): boolean {
    // we return true so that the non authenticated users can see the button
    if (!this.authenticatedUser){
      return true;
    }

    // if authenticated user is the owner then they don't need edit rights since owners can edit
    //  maybe we can change this later if we want both, but it would be confusing
    if (this.authenticatedUser.username === this.tool?.owner){
      return false;
    } 

    // if authenticated user already has edit permissions
    if (this.tool?.editPermission?.authors.includes(this.authenticatedUser.username)){
      return false;
    }

    // public tools can be edited by any authenticated user
    if (this.tool?.editPermission?.type === 'public'){
      return false;
    }

    // superusers don't need edit permissions because they can edit all tools
    if (this.authenticatedUser.is_superuser){
      return false;
    }

    return true;
  }

  updateTool() {
    if (this.authenticatedUser){
      this.router.navigate(['/','edit-tool', this.biotoolsID]);
      return;
    }
    
  }

  private checkRequests(r: UserRequestData, requestType: string){
    return  r.resourceId.toLowerCase() === this.biotoolsID.toLowerCase() && r.type === requestType
  }

  // [Note]: When we deploy this we should probably navigate to location.href rather than router.url
  requestOwnership() {
    if (!this.authenticatedUser){
      this.router.navigate(['/','login'],{ queryParams: {return_to: this.router.url}});
      return;
    }
    if (!confirm("We recommend that only the tool developers/maintainers request ownership.\nAll other users should request edit-rights.\nAre you sure you want to request ownership of this tool?")){
      return;
    }

    if (this.sentRequests.filter((r) => this.checkRequests(r, 'ownership')).length > 0){
      alert('You have already requested ownership for this tool!');
      return;
    }

    this.httpClient.put<UserRequestData>('request',
      {
        resourceId: this.biotoolsID.toLowerCase(),
        type: 'ownership'
      }
    ).subscribe({
      next: (r: UserRequestData) => {
        // [Note]: Need to notify / show on the page for the user to see that the request is succesfull
        this.sentRequests = [...this.sentRequests, r];
        console.log(r);
      },
      error: (e: HttpErrorResponse) => {
        // [Note]: Need to notify / show on the page for the user to see that the request returned an error
        console.log(e);
      }
    });
    
  }

  requestEditRights() {
    if (!this.authenticatedUser){
      this.router.navigate(['/','login'],{ queryParams: {return_to: this.router.url}});
      return;
    }

    if (this.sentRequests.filter((r) => this.checkRequests(r, 'editing')).length > 0){
      alert('You have already requested edit rights for this tool!');
      return;
    }

    this.httpClient.put<UserRequestData>('request',
      {
        resourceId: this.biotoolsID.toLowerCase(),
        type: 'editing'
      }
    ).subscribe({
      next: (r: UserRequestData) => {
        // [Note]: Need to notify / show on the page for the user to see that the request is succesfull
        this.sentRequests = [...this.sentRequests, r];
        console.log(r);
      },
      error: (e: HttpErrorResponse) => {
        // [Note]: Need to notify / show on the page for the user to see that the request returned an error
        console.log(e);
      }
    });

  }

  ngOnDestroy() {
      this.userSub?.unsubscribe();
      this.requestsSub?.unsubscribe();
  }  
}
