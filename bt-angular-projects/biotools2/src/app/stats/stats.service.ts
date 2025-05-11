import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AnnotationCountStats, Stats, TotalEntriesStats, UserStats } from './stats.model';

@Injectable()
export class StatsService {
  constructor(private httpClient: HttpClient) { }

  getStats(): Observable<Stats> {
      return this.httpClient.get<Stats>('stats');
  }

  getTotalEntriesStats(): Observable<TotalEntriesStats>{
    return this.httpClient.get<TotalEntriesStats>('stats/total-entries')
  }

  getUserStats(): Observable<UserStats>{
    return this.httpClient.get<UserStats>('stats/users')
  }

  getAnnotationCountStats(): Observable<AnnotationCountStats>{
    return this.httpClient.get<AnnotationCountStats>('stats/annotation-count')
  }
}
