import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolCardRoutingModule } from './tool-card-routing.module';
import { ToolCardComponent } from './tool-card.component';


@NgModule({
  declarations: [
    ToolCardComponent
  ],
  imports: [
    CommonModule,
    ToolCardRoutingModule
  ],
  providers: []
})
export class ToolCardModule { }
