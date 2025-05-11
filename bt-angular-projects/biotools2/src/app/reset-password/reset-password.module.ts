import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ResetPasswordRoutingModule } from './reset-password-routing.module';
import { ResetPasswordComponent } from './reset-password.component';
import { PasswordResetConfirmComponent } from './password-reset-confirm/password-reset-confirm.component';
import { PasswordResetSuccessComponent } from './password-reset-confirm/password-reset-success/password-reset-success.component';



@NgModule({
  declarations: [
    ResetPasswordComponent,
    PasswordResetConfirmComponent,
    PasswordResetSuccessComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ResetPasswordRoutingModule
  ]
})
export class ResetPasswordModule { }
