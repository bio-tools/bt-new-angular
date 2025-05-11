import { Component, OnInit } from '@angular/core';
import {EDAM_START_TERMS} from './edam-start-terms.variables';

@Component({
  selector: 'app-bt-edam-start-terms',
  templateUrl: './edam-start-terms.component.html',
  styleUrls: ['./edam-start-terms.component.scss']
})
export class EdamStartTermsComponent implements OnInit {
  terms = EDAM_START_TERMS;
  constructor() { }

  ngOnInit() {
  }

}
