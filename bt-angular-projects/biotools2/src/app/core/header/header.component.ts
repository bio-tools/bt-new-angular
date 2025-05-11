import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '@bt-core/auth/auth.service';
import { AuthToken } from '@bt-core/auth/auth-token.model';
import { User } from '@bt-core/user/user.model';
import { UserService } from '@bt-core/user/user.service';

@Component({
  selector: 'bt-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy{
  private userSub: Subscription | null = null;
  private tokenSub: Subscription | null = null
  private requestsCountSub: Subscription | null = null
  authenticatedUser: User | null = null;
  requestCount: number = 0;
  isAuthenticated = false;  

  constructor(private authService: AuthService, private userService: UserService) {}

  ngOnInit(): void {
    this.tokenSub = this.authService.token.subscribe({
      next: (token: AuthToken | null) => {
        this.isAuthenticated = !!token;
      }
    });

    this.userSub = this.userService.user.subscribe({
      next: (user: User | null) => {
        this.authenticatedUser = user;
      }
    });

    this.requestsCountSub = this.userService.requestCount.subscribe({
      next: (count: number) => {
        this.requestCount = count;
      }
    })
    
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy(): void {
      this.userSub?.unsubscribe();
      this.tokenSub?.unsubscribe();
      this.requestsCountSub?.unsubscribe();
  }

}
