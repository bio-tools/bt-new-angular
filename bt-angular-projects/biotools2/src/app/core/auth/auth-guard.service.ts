import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { map, Observable, take } from 'rxjs';
import { AuthToken } from './auth-token.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanLoad{

  constructor(private authService: AuthService, private router: Router) { 
  }

  // [Note]: canActivate and canLoad check the same thing, but we leave the same code in both for now, maybe things need to be changed  
  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      return this.authService.token.pipe(
        take(1),
        map((token: AuthToken | null) => {
          const isAuth = !!token;
          if (isAuth){
            return true;
          }
          return this.router.createUrlTree(['login'], { queryParams: {return_to: state.url}});
        })
      );
  }

  // [Note]: canLoad and canActivate check the same thing, but we leave the same code in both for now, maybe things need to be changed
  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.authService.token.pipe(
      take(1),
      map((token: AuthToken | null) => {
        const isAuth = !!token;
        if (isAuth){
          return true;
        }
        let url: string = '/'+ segments.map(s => s.path).join('/');
        return this.router.createUrlTree(['login'],{ queryParams: {return_to: url}});
      })
    );
  }

}
