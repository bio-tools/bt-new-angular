import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '@bt/core/auth/auth-guard.service';
import { DomainManagerComponent } from './domain-manager/domain-manager.component';
import { DomainsListComponent } from './domains-list/domains-list.component';

const routes: Routes = [
  { 
    path: '', 
    pathMatch: 'full',
    component: DomainsListComponent
  },
  {
    path: 'manage',
    canActivate: [AuthGuardService],
    component: DomainManagerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DomainsRoutingModule { }
