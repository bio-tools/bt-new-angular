import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@bt/core/auth/auth.service';

@Component({
  selector: 'app-password-reset-confirm',
  templateUrl: './password-reset-confirm.component.html',
  styleUrls: ['./password-reset-confirm.component.scss']
})
export class PasswordResetConfirmComponent implements OnInit {
  hasError = false;
  uid: string = "";
  token: string = "";
  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe( queryParams => {
      if (queryParams['uid']){
        this.uid = queryParams['uid'];
      }
      if (queryParams['token']){
        this.token = queryParams['token'];
      }
    });
  }

  onSubmit(form: NgForm){
    this.hasError = false;
    if (!form.valid){
      return;
    }

    const password1 = form.value.password1;
    const password2 = form.value.password2;

    //[Note]: Should probably verify if passwords are the same before sending to server
    
    this.authService.sendNewPasswordPair(password1, password2, this.uid, this.token).subscribe({
      next: (resData: any)  => {
        console.log("Success!");
        form.reset();
        // [Note]: We should probably make sure to logout on password reset success, before redirecting 
        this.router.navigate(['/','reset-password','confirm','success']);
      },
      error: (e: HttpErrorResponse) => {
        console.log("Signup error:", e);
        this.hasError = true;
        form.reset();
      }
    });    
  }

}
