import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BtBtnDarkComponent } from './bt-btn-dark/bt-btn-dark.component';
import { BtBtnComponent } from './bt-btn/bt-btn.component';
import { BtBtnDarkLargeComponent } from './bt-btn-dark-large/bt-btn-dark-large.component';
import { BtBtnStrokeComponent } from './bt-btn-stroke/bt-btn-stroke.component';
import { BtBtnStrokeSmallComponent } from './bt-btn-stroke-small/bt-btn-stroke-small.component';
import { BtBtnDarkStrokeComponent } from './bt-btn-dark-stroke/bt-btn-dark-stroke.component';

@NgModule({
  declarations: [  
    BtBtnDarkComponent, BtBtnComponent, BtBtnDarkLargeComponent, BtBtnStrokeComponent, BtBtnStrokeSmallComponent, BtBtnDarkStrokeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    BtBtnDarkComponent,
    BtBtnComponent,
    BtBtnDarkLargeComponent,
    BtBtnStrokeComponent,
    BtBtnStrokeSmallComponent,
    BtBtnDarkStrokeComponent
  ]
})
export class SharedModule { }
