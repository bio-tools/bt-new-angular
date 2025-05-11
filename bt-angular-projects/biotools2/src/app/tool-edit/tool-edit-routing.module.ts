import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewToolComponent } from './new-tool/new-tool.component';
import { ToolEditComponent } from './tool-edit/tool-edit.component';

const routes: Routes = [
  { 
    path: '', 
    pathMatch: 'full',
    component: NewToolComponent
  },
  {
    path: ':biotoolsID',
    component: ToolEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToolEditRoutingModule { }
