import { Component, OnInit, OnDestroy } from '@angular/core';
import { StatsService } from './stats.service';
import { UsedTermsService } from '../core/http/used-terms.service';
import { ActivatedRoute } from '@angular/router';
import { Stats } from './stats.model';
import { TouchSequence } from 'selenium-webdriver';
import { SpinnerService } from '../core/services/spinner.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
  providers: [StatsService, UsedTermsService, SpinnerService]
})
export class StatsComponent implements OnInit, OnDestroy {

  constructor(private statsService: StatsService, private route: ActivatedRoute, public spinnerService: SpinnerService) { }

  stats: Stats;
  statsSubscription: Subscription

  ngOnInit() {
    this.spinnerService.show();

    this.statsSubscription = this.statsService.getStats().subscribe(
      (stats: Stats) => {
        this.stats = stats;
        this.spinnerService.hide();
      },
      (error: Stats) => {
        console.log(error);
        this.spinnerService.hide();
      }
    );

  }

  ngOnDestroy(){
    // I don't think we need to unsubscribe since this is an http from angular and i think angular automatically unsubscribes
    this.statsSubscription.unsubscribe();
  }
}
