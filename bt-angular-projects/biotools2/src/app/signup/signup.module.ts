import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@bt/shared/shared.module';
import { SignupSuccessComponent } from './signup-success/signup-success.component';


@NgModule({
  declarations: [
    SignupComponent,
    SignupSuccessComponent
  ],
  imports: [
    CommonModule,
    SignupRoutingModule,
    FormsModule,
    SharedModule
    
  ]
})
export class SignupModule { }
