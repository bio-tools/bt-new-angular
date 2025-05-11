import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'bt-json-editor',
  templateUrl: './json-editor.component.html',
  styleUrls: ['./json-editor.component.scss']
})
export class JsonEditorComponent implements OnInit {
  // we accept a string as input
  @Input()  data!: string;

  // we output/emit a string... maybe we should emit a valid JSON object, or at least a valid JSON string
  @Output() dataChange = new EventEmitter<string>();

  jsonError: string | null;
  constructor() { 
    this.jsonError = null;
  }

  ngOnInit(): void {}

  onTextareaChange(newValue: string){
    try{
      JSON.parse(newValue);
      this.jsonError = null;
      this.dataChange.emit(newValue);
    }catch (e){
      // if JSON.parse fails we get here, print the error above the textarea
      if (e instanceof SyntaxError) {
        console.log(e.message);
        this.jsonError = e.message;
      } else {
        console.log(e);
      }
      
    }
  }
}
