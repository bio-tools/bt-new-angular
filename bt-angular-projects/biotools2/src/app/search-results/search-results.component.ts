import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Tool } from '@bt/core/tool/tool.model';
import { SearchResults } from './search-results.model';
import { SearchResultsService } from './search-results.service';

@Component({
  selector: 'bt-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  searchResults: SearchResults;
  tools: Tool[];
  queryParams: Params
  error: any;
  constructor(private searchResultsService: SearchResultsService, private route: ActivatedRoute, private router: Router) { 
    this.searchResults = {
      count: 0,
      next: null,
      previous: null,
      list: []
    }
    
    this.tools = [];
    
    this.queryParams = {
      sort: 'score',
      page: 1
    }
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe({
      next: (queryParams: Params) => {
        
        // the order is important here to overwrite sort and page if they exist in URL query params already
        this.queryParams = {...this.queryParams, ...queryParams};
        
        if (!queryParams['sort'] || !queryParams['page']){
          this.router.navigate(
              ['/','t'], 
              {
                queryParams: this.queryParams
            });
          return;
        }
       
        this.searchResultsService.getSearchResults(queryParams).subscribe({
          next: (sr: SearchResults) => {
            this.searchResults = sr;
            this.tools = sr.list;
          },
          error: (e: HttpErrorResponse) => {
            console.log('Error in getting search results');
            this.error = e.error;
          }
        });
      }
    });
  }

  nextPage(){
    let p: string | null = null;
    if (this.searchResults.next){
      p = this.searchResults.next.split('=')[1];
      
      if (isNaN(Number(p))){
        return;
      }

      this.router.navigate(
        ['/','t'], 
        {
          queryParams: {...this.queryParams, page: p}
      });
    }

  }

}
