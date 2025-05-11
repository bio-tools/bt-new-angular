import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { AuthToken } from '@bt-core/auth/auth-token.model';
import { AuthService } from '@bt-core/auth/auth.service';
import { User, UserRequests } from './user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnDestroy{
  private tokenSub: Subscription | null = null
  private token: AuthToken | null = null

  public user = new BehaviorSubject<User | null>(null)
  public requests = new BehaviorSubject<UserRequests | null>(null)

  public requestCount = new BehaviorSubject<number>(0)
  

  constructor(private httpClient: HttpClient, private authService: AuthService, private router: Router) {
    this.tokenSub = this.authService.token.subscribe({
      next: (token: AuthToken | null) => {
        this.token = token;
        this.processUser();
      }
    });
   }

  private processUser(){
    if (!this.token){
      this.user.next(null);
      this.requestCount.next(0);
      return;
    }


    
    this.httpClient.get<User>('rest-auth/user/').subscribe({
      
      next: (user: User) => {
        this.user.next(user);
        this.requestCount.next(user.requests_count);
        // if user is ok then we also fetch requests, user should not be null since we get it from API
        // and if there are problems we will catch them in error
        this.fetchRequests();
      },
      error: (e: HttpErrorResponse) => {
        // this.user.next(null);
        // this.authService.token.next(null);
        // localStorage.removeItem('token');
        // this.router.navigate(['/login']);
      }
    });
  }

  public fetchRequests(){
    if (!this.token){
      this.requests.next(null);
      return;
    }

    // we should probably do this 5 minutes so that users can see their requests
    // we should do something for responses as well, maybe show a notification that 
    //  an ownership request has been accepted or denied
    this.httpClient.get<UserRequests>('request').subscribe({
      next: (request: UserRequests) => {
        this.requests.next(request);
        if (request.requests.received){
          this.requestCount.next(request.requests.received.filter( r => r.completed === false).length);
        }
      },
      error: (e: HttpErrorResponse) => {
        this.requests.next(null);
        this.requestCount.next(0);
      }
    });
  }

  /*
    This is a very basic request handling.
    It concludes a request and it re-fetches all requests.
    Needs a bit of refining on a per request level.
    If there are multiple requests for the same resource at the time of accepting / declining 
      we should resolve all of them on the server.
  */

  public acceptRequest(requestId: string){
    this.httpClient.post('request/conclude', 
      {
        requestId: requestId, 
        accept: true
      }
    ).subscribe({
      next: () => {
        this.fetchRequests();
      },
      error: (e: HttpErrorResponse) => {
        console.log(e);
      }
    });
  }

  public denyRequest(requestId: string){
    this.httpClient.post('request/conclude', 
      {
        requestId: requestId, 
        accept: false
      }
    ).subscribe({
      next: () => {
        this.fetchRequests();
      },
      error: (e: HttpErrorResponse) => {
        console.log(e);
      }
    });
  }

  public requestOwnership(){

  }

  public requestEditRights(){

  }

  public disownTool(biotoolsID: string){
    return this.httpClient.post(
      `t/${biotoolsID}/disown`,
      {
        id: biotoolsID
      }
    );
  }





  ngOnDestroy(): void {
      this.token = null;
      this.tokenSub?.unsubscribe()
  }

}
