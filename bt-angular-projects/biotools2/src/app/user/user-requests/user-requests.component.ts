import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserRequestData, UserRequests } from '@bt/core/user/user.model';
import { UserService } from '@bt/core/user/user.service';
import { Subscription } from 'rxjs';

/*
  This is a very basic request handling.
  It concludes a request and it re-fetches all requests.
  Needs a bit of refining on a per request level.
  If there are multiple requests for the same resource at the time of accepting / declining 
    we should resolve all of them on the server.
*/

@Component({
  selector: 'bt-user-requests',
  templateUrl: './user-requests.component.html',
  styleUrls: ['./user-requests.component.scss']
})
export class UserRequestsComponent implements OnInit, OnDestroy {
  private requestsSub: Subscription | null = null;
  userRequests: UserRequests | null = null
  constructor(private userService: UserService) { }
  receivedRequests: UserRequestData[] = [];
  sentRequests: UserRequestData[] = [];


  ngOnInit(): void {
    console.log('Init requests component');
    this.requestsSub = this.userService.requests.subscribe({
      next: (requests: UserRequests | null) => {
        this.userRequests = requests;
        console.log(this.userRequests);
        if (this.userRequests) {
          this.receivedRequests = this.userRequests.requests.received.reverse();
          this.sentRequests = this.userRequests.requests.sent.reverse();
        }
      }
    });
    this.userService.fetchRequests();
  }

  acceptRequest(requestId: string){
    this.userService.acceptRequest(requestId);
    console.log('Request:', requestId, ' accepted');
  }

  denyRequest(requestId: string){
    this.userService.denyRequest(requestId);
    console.log('Request:', requestId, ' denied');
  }

  ngOnDestroy(): void {
      this.requestsSub?.unsubscribe();
      console.log('Destroy requests component');
  }

  
}
