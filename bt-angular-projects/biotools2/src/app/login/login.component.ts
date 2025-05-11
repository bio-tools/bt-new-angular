import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@bt/core/auth/auth.service';
import { User } from '@bt-core/user/user.model';
import { UserService } from '@bt-core/user/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'bt-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  error: any = null;
  private returnTo: string | null = null
  private userSub: Subscription | null = null
  
  constructor(
    private authService: AuthService, 
    private router: Router, 
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe( queryParams => {
      if (queryParams['return_to']){
        this.returnTo = queryParams['return_to'];
      }
    });
    console.log(this.returnTo);
    this.userSub = this.userService.user.subscribe({
      next: (user: User | null) => {
        // user is already logged in
        if (user){
          this.router.navigate(['/']);
          return;
        }
      }
    });
    
  }

  onSubmit(form: NgForm){
    if (!form.valid){
      return;
    }

    const username = form.value.username;
    const password = form.value.password;

    this.authService.login(username, password).subscribe({
      next: (_) => {
        this.error = null;
        // should maybe redirect to the original page the user was viewing before the login page
        // ... if any, perhaps they went directly to login page
        this.userSub?.unsubscribe();
        if (this.returnTo){
          this.router.navigateByUrl(this.returnTo);  
        } else {
          this.router.navigate(['t']);
        }
        
      },
      error: (e: HttpErrorResponse) => {
        console.log("Signup error:", e);
        this.error = e.error;
      }
    })

    form.reset();
  }

  ngOnDestroy(): void {
      this.userSub?.unsubscribe();
  }
}
