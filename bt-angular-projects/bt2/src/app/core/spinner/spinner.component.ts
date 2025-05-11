import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bt-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
  @Input()
  datalabel = '';

  constructor() { }

  ngOnInit() {
  }

}
