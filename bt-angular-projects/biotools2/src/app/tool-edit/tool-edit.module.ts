import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolEditRoutingModule } from './tool-edit-routing.module';
import { NewToolComponent } from './new-tool/new-tool.component';
import { ToolEditComponent } from './tool-edit/tool-edit.component';
import { ToolEditService } from './tool-edit.service';
import { ToolService } from '@bt/tool-card/tool.service';
import { JsonEditorComponent } from './shared/json-editor/json-editor.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NewToolComponent,
    ToolEditComponent,
    JsonEditorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ToolEditRoutingModule
  ],
  providers: [ToolEditService, ToolService]
})
export class ToolEditModule { }
