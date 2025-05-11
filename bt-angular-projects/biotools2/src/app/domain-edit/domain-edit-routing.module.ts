import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DomainEditComponent } from './domain-edit/domain-edit.component';
import { NewDomainComponent } from './new-domain/new-domain.component';

const routes: Routes = [
  { 
    path: '', 
    pathMatch: 'full',
    component: NewDomainComponent
  },
  {
    path: ':domain',
    component: DomainEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DomainEditRoutingModule { }
