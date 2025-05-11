import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DomainsRoutingModule } from './domains-routing.module';
import { DomainsListComponent } from './domains-list/domains-list.component';
import { DomainManagerComponent } from './domain-manager/domain-manager.component';


@NgModule({
  declarations: [
    DomainsListComponent,
    DomainManagerComponent
  ],
  imports: [
    CommonModule,
    DomainsRoutingModule
  ]
})
export class DomainsModule { }
