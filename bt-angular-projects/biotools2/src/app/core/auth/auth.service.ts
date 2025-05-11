import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, tap, throwError } from 'rxjs';
import { User } from '../user/user.model';
import { AuthToken, AuthData } from './auth-token.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  // this is by default false, but when we have real login then we need to make sure we look if user is perhaps already logged in
  public token = new BehaviorSubject<AuthToken | null>(null)

  constructor(private router: Router, private httpClient: HttpClient) {}

  signup(username: string, email: string, password1: string, password2: string){
    return this.httpClient.post<AuthData>(
      'rest-auth/registration/',
      {
        username: username,
        email: email,
        password1: password1,
        password2: password2
      }
    );
  }

  login(username: string, password: string){
    return this.httpClient.post<AuthData>(
      'rest-auth/login/',
      {
        username: username,
        password: password
      }
    ).pipe(
      catchError((e : HttpErrorResponse) => {
        // We can also logout here before we throw the error
        return throwError(() =>  e);
      }),
      tap({
        // on success we emit the new token and we write to local storage
        next: (authData: AuthData) => {
          // we should have a user service that subscribes to the authToken and when we emit a new token we should do a call to /rest-auth/user
          const token = new AuthToken(authData.key);
          this.token.next(token);
          localStorage.setItem('token', JSON.stringify(authData));
        }
      })
      
    )
  }

  // need to check if password reset emails will only be sent to verified emails or to any email
  sendPasswordResetEmail(email: string){
    return this.httpClient.post<any>(
      'rest-auth/password/reset/',
      {
        email: email
      }
    );
  }

  sendNewPasswordPair(password1: string, password2: string, uid: string, token: string){
    return this.httpClient.post<any>(
      'rest-auth/password/reset/confirm/',
      {
        new_password1: password1,
        new_password2: password2,
        uid: uid,
        token: token
      }
    );
  }
  
  autoLogin(){
    const stringToken: string | null = localStorage.getItem('token');
    if (!stringToken){
      // maybe even logout ...
      return
    }

    const authData: AuthData = JSON.parse(stringToken);
    const loadedToken: AuthToken = new AuthToken(authData.key);
    if (loadedToken.key){
      this.token.next(loadedToken);
    }
    // maybe otherwise logout...
    
    // could be the case that we have a token but the user has logged out from a different place and the token is no longer valid
    // case in which we need to remove the token from local storage and emit an empty token
    // we can verify this by checking the user profile
    // try the user here as well and if the token doesn't work with the user then emit an actual null token (after we emiited a non null one )and 
    // then logout and navigate
    this.httpClient.get<User>('rest-auth/user/').subscribe({
      error: (e: HttpErrorResponse) => {
        console.log('No user from autologin');
      }
    });
  }

  // maybe logout should have a navigateAway: bool or navigateTo: string 
  // where we can navigate to home or to a specific route if the variable is set
  logout(){
    this.httpClient.post<any>('rest-auth/logout/', null).subscribe({
      next: (_) => {
        this.token.next(null);
        localStorage.removeItem('token');
      },
      error: (e: HttpErrorResponse) => {
        console.log('Errror in logout', e);
        this.token.next(null);
        localStorage.removeItem('token');
      }
    });
    this.router.navigate(['']);
  }
}
