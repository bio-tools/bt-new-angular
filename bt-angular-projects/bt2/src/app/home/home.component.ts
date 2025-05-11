import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { SpinnerService } from '../core/services/spinner.service';
import {PARTNERS } from './partners.variables';

@Component({
  selector: 'app-bt-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [SpinnerService],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit, AfterViewInit {
  node_link: string;
  partners: any[];
  constructor(public spinnerService: SpinnerService) { }
  ngOnInit() {
    this.node_link = PARTNERS.ELIXIR_NODES_LINK;
    this.partners = PARTNERS.ELIXIR_NODES;

    this.spinnerService.show();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.spinnerService.hide();
    });
  }
}
