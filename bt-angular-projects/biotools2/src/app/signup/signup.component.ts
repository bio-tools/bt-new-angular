import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthData } from '@bt/core/auth/auth-token.model';
import { AuthService } from '@bt/core/auth/auth.service';

@Component({
  selector: 'bt-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  error: any = null;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    if (!form.valid){
      return;
    }

    const username = form.value.username;
    const email = form.value.email;
    const password1 = form.value.password1;
    const password2 = form.value.password2;

    //[Note]: Should probably verify if passwords are the same before sending to server
    this.authService.signup(username, email, password1, password2).subscribe({
      next: (resData: AuthData)  => {
        this.router.navigate(['signup','success']);
      },
      error: (e: HttpErrorResponse) => {
        console.log("Signup error:", e);
        this.error = e.error;
      }
    });

    form.reset();
  }
}
