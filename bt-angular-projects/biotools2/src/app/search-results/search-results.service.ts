import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { Observable } from 'rxjs';
import { SearchResults } from './search-results.model';

// We call it search results because we might return tools and domains at some point
@Injectable()
export class SearchResultsService {

  constructor(private httpClient: HttpClient) { }

  // [Note]: search options should be an object that contains all possible keys of the search options (e.g. name, biotoolsID, topic, topicID etc)
  private createQueryStringParams(searchOptions: Params): HttpParams {
    let params = new HttpParams();

    Object.keys(searchOptions).forEach(key => {
        const value = searchOptions[key];
        params = params.append(key, value);
    });

    return params;
  }
  getSearchResults(searchOptions: Params): Observable<SearchResults> {
    return this.httpClient.get<SearchResults>('t', {
        params: this.createQueryStringParams(searchOptions)
    });
  }
}
