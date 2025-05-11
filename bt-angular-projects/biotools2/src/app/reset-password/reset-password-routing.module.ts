import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PasswordResetConfirmComponent } from './password-reset-confirm/password-reset-confirm.component';
import { PasswordResetSuccessComponent } from './password-reset-confirm/password-reset-success/password-reset-success.component';
import { ResetPasswordComponent } from './reset-password.component';

const routes: Routes = [
  {
    path: '', 
    pathMatch: 'full',
    component: ResetPasswordComponent
  },
  {
    path: 'confirm',
    component: PasswordResetConfirmComponent
  },
  {
    path: 'confirm/success',
    component: PasswordResetSuccessComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResetPasswordRoutingModule { }
