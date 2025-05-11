import { HttpClient, HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { exhaustMap, Observable, take, tap } from 'rxjs';
import { UserService } from '../user/user.service';
import { AuthToken } from './auth-token.model';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor{
  
  constructor(private authService: AuthService, private router: Router, private userService: UserService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.authService.token.pipe(
      take(1),
      exhaustMap( (token: AuthToken | null) => {  
        if (token && token.key){
          const modifiedReq = req.clone({headers: new HttpHeaders().set('Authorization', 'Token ' + token.key)});
          // const modifiedReq = req.clone();
          return next.handle(modifiedReq).pipe();
        }
        // when users are not logged in
        return next.handle(req);
      }),
      tap({
        error: (e: HttpErrorResponse ) => {
          console.log('Error in interceptor tap');
          if (e.status === 401){
            this.userService.user.next(null);
            this.authService.token.next(null);
            localStorage.removeItem('token');
            this.router.navigate(['/login']);
            // [Note]: Tell the user they've been logged out in a pop-up / notification that goes away and then ask them to login again
          }
        }
      })
    );
    
  }
}
