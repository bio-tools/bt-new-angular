import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DomainEditRoutingModule } from './domain-edit-routing.module';
import { NewDomainComponent } from './new-domain/new-domain.component';
import { DomainEditComponent } from './domain-edit/domain-edit.component';
import { NewDomainService } from './new-domain.service';
import { DomainEditService } from './domain-edit.service';
import { JsonEditorComponent } from './json-editor/json-editor.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NewDomainComponent,
    DomainEditComponent,
    JsonEditorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DomainEditRoutingModule
  ],
  providers: [DomainEditService, NewDomainService]
})
export class DomainEditModule { }
