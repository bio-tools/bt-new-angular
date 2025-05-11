import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AnnotationCountStats, Stats, TotalEntriesStats, UserStats } from './stats.model';
import { StatsService } from './stats.service';

@Component({
  selector: 'bt-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
  providers: [StatsService]
})
export class StatsComponent implements OnInit {
  stats: Stats | null;
  totalEntriesStats: TotalEntriesStats | null;
  userStats: UserStats | null;
  annotationCountStats: AnnotationCountStats | null;

  constructor(private statsService: StatsService) { 
    this.stats = null;
    this.totalEntriesStats = null;
    this.userStats = null;
    this.annotationCountStats = null;
  }

  ngOnInit(): void {
    
    // main stats
    this.statsService.getStats().subscribe({
      next: (stats: Stats) => {
        this.stats = stats;
      },
      error: (e: HttpErrorResponse) => {
        console.log("Could not get stats:", e);
      }
    });

    //total entries stats
    this.statsService.getTotalEntriesStats().subscribe({
      next: (stats: TotalEntriesStats) => {
        this.totalEntriesStats = stats;
      },
      error: (e: HttpErrorResponse) => {
        console.log("Could not get total entries:", e);
      }
    });

    //user stats
    this.statsService.getUserStats().subscribe({
      next: (stats: UserStats) => {
        this.userStats = stats;
      },
      error: (e: HttpErrorResponse) => {
        console.log("Could not get user stats:", e);
      }
    });

    // annotation count stats
    this.statsService.getAnnotationCountStats().subscribe({
      next: (stats: AnnotationCountStats) => {
        this.annotationCountStats = stats;
      },
      error: (e: HttpErrorResponse) => {
        console.log("Could not get annotation count stats:", e);
      }
    });
  }

}
