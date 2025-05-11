import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bt-small-spinner',
  templateUrl: './small-spinner.component.html',
  styleUrls: ['./small-spinner.component.scss']
})
export class SmallSpinnerComponent implements OnInit {
  @Input()
  datalabel = '';

  constructor() { }

  ngOnInit() {
  }

}
