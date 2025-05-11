import { Injectable } from '@angular/core';
import {SearchToolsParams} from '../models/search-tools-params.model';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class SearchToolsService {
  private params: SearchToolsParams;

  private page: number;
  private filter: any;

  public setParams(p: SearchToolsParams) {
    this.params = p;
  }

  public getParam() {
    return this.params;
  }

  public setPage(p: number) {
    this.page = p;
  }

  public getPage() {
    return this.page;
  }

  public setFilter(f: any) {
    this.filter = f;
  }

  public getFilter() {
    return this.filter;
  }


  constructor(private router: Router) {
    this.params = new SearchToolsParams();
  }

  // aggregate search all search params and filter params and page
  // and everything else before searching
  private aggregateAll() {
    // TODO
  }

  public search() {
    this.router.navigate(['/t'],  { queryParams: this.params });
  }
}
