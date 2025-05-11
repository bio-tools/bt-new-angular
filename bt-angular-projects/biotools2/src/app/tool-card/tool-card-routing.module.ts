import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToolCardComponent } from './tool-card.component';

const routes: Routes = [
  {
    path: '',
    component: ToolCardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToolCardRoutingModule { }
