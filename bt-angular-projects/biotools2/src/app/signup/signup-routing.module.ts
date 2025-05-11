import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupSuccessComponent } from './signup-success/signup-success.component';
import { SignupComponent } from './signup.component';

const routes: Routes = [
  {
    path: '', 
    pathMatch: 'full',
    component: SignupComponent
  },
  {
    path: 'success',
    component: SignupSuccessComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignupRoutingModule { }
