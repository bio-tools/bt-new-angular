import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Stats } from './stats.model';
import { GLOBALS } from 'src/app/core/globals';
import { Observable } from 'rxjs';

@Injectable()
export class StatsService {
    constructor(private httpClient: HttpClient) { }

    getStats(): Observable<Stats> {
        return this.httpClient.get<Stats>(GLOBALS.BASE_API_URL + '/stats?format=json');
    }

    /*
        There are also:
        stats/total-entries/
        stats/annotation-count/
        stats/users/
        need to check if they are needed or if /stats includes everything.
     */
}
