import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '@bt/core/auth/auth.service';

@Component({
  selector: 'bt-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  message: string = "";
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    this.message = "";
    if (!form.valid){
      return;
    }

    const email = form.value.email;

    this.authService.sendPasswordResetEmail(email).subscribe({
      next: (resData: any)  => {
        this.message = resData.detail;
      },
      error: (e: HttpErrorResponse) => {
        console.log("Problem with password reset", e);
        this.message = e.error;
      }
    });

    form.reset();
  }
}
