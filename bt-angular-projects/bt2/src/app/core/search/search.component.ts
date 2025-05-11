import { Component, OnInit, ViewChild, ElementRef, Input, OnChanges } from '@angular/core';
import { UsedTermsService } from '../http/used-terms.service';
import { MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { SearchToolsService } from './search-tools.service';
import { SearchToolsParams } from '../models/search-tools-params.model';
import { Router, ActivatedRoute } from '@angular/router';
import { SearchTag } from '../models/search-tag.model';
import { HttpParams } from '@angular/common/http';



@Component({
  selector: 'app-bt-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers:[UsedTermsService]
})
export class SearchComponent implements OnInit, OnChanges {
  @ViewChild('searchInput') searchElement: ElementRef;
  @Input() autorefresh: boolean;
  @Input() onTools: boolean;

  searchTags: SearchTag[] = [];
  /*
  Also need to figure out how to pass search parameters from url
  Do we pass a boolean saying that there could be parameters from url and get them from a service
  Or do we pass the actual parameters, which also change inside and we may need two way binding for changing outside
  Do we need other fil
  */
  mytext = '';
  tabIndex = 0;
  suggestionIndex = -1;
  showSuggestions = false;
  searchCategories = [
    {
      id: 'q',
      label: 'Everything',
      qs: 'q',
      items: [],
      filteredItems: []
    },
    {
      id: 'topic',
      label: 'Topic',
      qs: 'topic',
      items: [],
      filteredItems: []
    },
    {
      id: 'operation',
      label: 'Operation',
      qs: 'operation',
      items: [],
      filteredItems: []
    },
    {
      id: 'input',
      label: 'Input',
      qs: 'input',
      items: [],
      filteredItems: []
    },
    {
      id: 'output',
      label: 'Output',
      qs: 'output',
      items: [],
      filteredItems: []
    },
    {
      id: 'toolType',
      label: 'Tool type',
      qs: 'toolType',
      items: [],
      filteredItems: []
    },
    {
      id: 'language',
      label: 'Language',
      qs: 'language',
      items: [],
      filteredItems: []
    },
    {
      id: 'accessibility',
      label: 'Accessibility',
      qs: 'accessibility',
      items: [],
      filteredItems: []
    },
    {
      id: 'cost',
      label: 'Cost',
      qs: 'cost',
      items: [],
      filteredItems: []
    },
    {
      id: 'license',
      label: 'License',
      qs: 'license',
      items: [],
      filteredItems: []
    },
    {
      id: 'credit',
      label: 'Credit',
      qs: 'credit',
      items: [],
      filteredItems: []
    },
    {
      id: 'collectionID',
      label: 'Collection',
      qs: 'collectionID',
      items: [],
      filteredItems: []
    },
    {
      id: 'name',
      label: 'Name',
      qs: 'name',
      items: [],
      filteredItems: []
    }
  ];

  categoriesIndex = {
    q: 0,
    topic: 1,
    operation: 2,
    input: 3,
    output: 4,
    toolType: 5,
    language: 6,
    accessibility: 7,
    cost: 8,
    license: 9,
    credit: 10,
    collectionID: 11,
    name: 12
  };


  // category settings
  // material stuff
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = false;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  // tags = [
  //   'ana',
  //   'are',
  //   'mere'
  // ];

  constructor(
    private usedTermsService: UsedTermsService,
    private searchToolsService: SearchToolsService,
    private router: Router,
    private route: ActivatedRoute) {
    this.autorefresh = false;
    this.onTools = false;
  }

  ngOnInit() {
    if (this.onTools) {
      this.setTagsFromQueryParams(this.route.snapshot.queryParams);
      this.subscribeToUsedTerms(this.paramsToHttpParams(this.route.snapshot.queryParams));

      // changing the search tags will also involve changing
      // the used terms suggested for autocomplete
      this.route.queryParams.subscribe(
        (queryParams) => {
          this.subscribeToUsedTerms(this.paramsToHttpParams(queryParams));
        }
      );
    } else {
      this.subscribeToUsedTerms(new HttpParams());
    }
  }

  ngOnChanges() {
  }

  paramsToHttpParams(queryParams: object): HttpParams {
    let p: HttpParams = new HttpParams();

    for (const key of Object.keys(queryParams)) {
        p = p.append(key, this.route.snapshot.queryParams[key]);
    }
    return p;
  }

  setTagsFromQueryParams(params) {

    this.searchTags = [];
    let q: string[];

    // deal with q
    if (params.q) {
      q = params.q.split('+').map((e) => e.trim());
      for (const p of q) {
        const index: number = this.categoriesIndex.q;
        const category: string = this.searchCategories[index].label;
        const value = p;
        const qs = 'q';
        this.searchTags.push(new SearchTag(category, value, qs));
      }
    }

    for (const key of Object.keys(params)) {
      if (key !== 'q' && Object.keys(this.categoriesIndex).includes(key)) {
        const index: number = this.categoriesIndex[key];
        const category: string = this.searchCategories[index].label;
        const value = params[key];
        const qs = key;
        this.searchTags.push(new SearchTag(category, value, qs));
      } else if (key !== 'q' ) {
        const s: SearchToolsParams = new SearchToolsParams();
        if (s.hasNamedTagParam(key)) {
          this.searchTags.push(new SearchTag(key, params[key]));
        }
      }
    }

  }

  subscribeToUsedTerms(params: HttpParams) {
    // need to handle http errors
    this.usedTermsService.getAllUsedTerms(params).subscribe(
      (usedTerms) => {
        this.initializeUsedTerms(usedTerms, 'q');
      }
    );

    this.usedTermsService.getTopicUsedTerms(params).subscribe(
      (usedTerms) => {
        this.initializeUsedTerms(usedTerms, 'topic');
      }
    );

    this.usedTermsService.getOperationUsedTerms(params).subscribe(
      (usedTerms) => {
        this.initializeUsedTerms(usedTerms, 'operation');
      }
    );

    this.usedTermsService.getInputUsedTerms(params).subscribe(
      (usedTerms) => {
        this.initializeUsedTerms(usedTerms, 'input');
      }
    );

    this.usedTermsService.getOuputUsedTerms(params).subscribe(
      (usedTerms) => {
        this.initializeUsedTerms(usedTerms, 'output');
      }
    );

    this.usedTermsService.getToolTypeUsedTerms(params).subscribe(
      (usedTerms) => {
        this.initializeUsedTerms(usedTerms, 'toolType');
      }
    );

    this.usedTermsService.getLanguageUsedTerms(params).subscribe(
      (usedTerms) => {
        this.initializeUsedTerms(usedTerms, 'language');
      }
    );

    this.usedTermsService.getAccessibilityUsedTerms(params).subscribe(
      (usedTerms) => {
        this.initializeUsedTerms(usedTerms, 'accessibility');
      }
    );

    this.usedTermsService.getCostUsedTerms(params).subscribe(
      (usedTerms) => {
        this.initializeUsedTerms(usedTerms, 'cost');
      }
    );

    this.usedTermsService.getLicenseUsedTerms(params).subscribe(
      (usedTerms) => {
        this.initializeUsedTerms(usedTerms, 'license');
      }
    );

    this.usedTermsService.getCreditUsedTerms(params).subscribe(
      (usedTerms) => {
        this.initializeUsedTerms(usedTerms, 'credit');
      }
    );

    this.usedTermsService.getCollectionUsedTerms(params).subscribe(
      (usedTerms) => {
        this.initializeUsedTerms(usedTerms, 'collectionID');
      }
    );

    this.usedTermsService.getNameUsedTerms(params).subscribe(
      (usedTerms) => {
        this.initializeUsedTerms(usedTerms, 'name');
      }
    );
  }

  callSearch() {
    const q = this.searchTags.filter((o: SearchTag) => o.qs === 'q').map((o) => o.value).join('+');
    const params: SearchToolsParams = new SearchToolsParams();
    for (const tag of this.searchTags) {
      if (tag.qs !== 'q') {
        params[tag.qs] = tag.value;
      }
    }
    if (q !== '') {
      params.setQ(q);
    }
    this.searchToolsService.setParams(params);
    this.searchToolsService.search();
  }
  initializeUsedTerms(usedTerms: string[], key: string) {
    const index = this.categoriesIndex[key];
    this.searchCategories[index].items = usedTerms;
    this.searchCategories[index].filteredItems = this._filter(usedTerms, this.mytext);
  }


  isDuplicateTag(value: string, category: string) {
    for (const tag of this.searchTags) {
      if (tag.value === value && tag.category === category) {
        return true;
      }
    }

    return false;
  }

  /**
   *
   * @param value is the value of a potential tag
   * @returns true if a search is need, false if no search is needed
   *
   */
  needSearch(value: string, category: string): boolean {
    const untrimmedValue = value;
    value = value.trim();

    if (value) {
      if (this.autorefresh) {
        return true;
      }
      return false;
    }

    // if any tags exist
    // and the initial untrimmed value is empty space
    // then there should be a search
    // works the other way when autorefresh is true
    if (this.searchTags && untrimmedValue === '' && !this.autorefresh) {
      return true;
    }

    return false;
  }



  /**
   * @param category is the category of the tag
   * @param value is the value of the tag
   * @param isQuoted informs if the value is quoted or not
   */
  addTag(category: string, value: string, qs: string, isQuoted: boolean) {
    if (value) {
      // can also check for duplicates before we push
      if (isQuoted) {
        value = '"' + value + '"';
      }

      // look for categories other than Everything / q
      // and only kep one value of these since
      // the api doesn't support multiple values
      const index = this.searchTags.map((t) => t.category).indexOf(category);
      const o = new SearchTag(category, value, qs);

      if (index >= 0 && qs !== 'q') {
        this.searchTags[index] = o;
      } else {
        this.searchTags.push(o);
      }
    }
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    console.log(input);
    const value = event.value;
    console.log(value);
    const category = this.searchCategories[this.tabIndex].label;
    const qs = this.searchCategories[this.tabIndex].qs;

    // Add our tag
    // if tag is added from suggestion list then quote it
    // if not just add it normally
    if (this.suggestionIndex >= 0) {
      if (this.isDuplicateTag(`"${value}"`, category)) {
        return;
      }
      this.addTag(category, value, qs, true);
    } else {
      if (this.isDuplicateTag(value, category)) {
        return;
      }
      this.addTag(category, value, qs, false);
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.mytext = '';
    this.closeAutocomplete();

    if (this.needSearch(value, category)) {
      this.callSearch();
    }
    console.log('added');
  }

  remove(tag: SearchTag): void {
    const index = this.searchTags.indexOf(tag);

    if (index >= 0) {
      this.searchTags.splice(index, 1);
      this.searchFocus();
    }

    if (this.searchTags.length === 0) {
      this.closeAutocomplete();
    }

    // we get here if there are some tags left after removal
    // and if the autorefersh is on

    if (this.autorefresh) {
      this.callSearch();
    }
  }

  onChangeText(event) {
    // check if input has focused and if there is any value typed
    if (document.activeElement === this.searchElement.nativeElement
      && this.mytext) {
      this.showSuggestions = true;
    }

    this.searchCategories.forEach((category) => {
      category.filteredItems = this._filter(category.items, this.mytext);
    });
    if (this.mytext === '') {
      this.closeAutocomplete();
    }
  }


  private _filter(items: string[], value: string): string[] {
    if (value === '' || value === undefined || value === null) {
      return items.slice(0, 10);
    }
    const filterValue = value.toLowerCase();
    return items.filter(item => item.toLowerCase().includes(filterValue)).slice(0, 10);
  }

  searchFocus() {
    setTimeout(() => {
      this.searchElement.nativeElement.focus();
    }, 0);
    this.suggestionIndex = -1;
    this.searchElement.nativeElement.value = this.mytext;
  }

  addFromSuggestion(value: string) {
    const category = this.searchCategories[this.tabIndex].label;
    const qs = this.searchCategories[this.tabIndex].qs;
    if (this.isDuplicateTag(`"${value}"`, category)) {
      return;
    }

    // the status from add tag doesn't matter here
    // because we don't press enter but click on a suggestion
    this.addTag(category, value, qs, true);
    this.mytext = '';
    this.closeAutocomplete();
    this.searchFocus();

    if (this.autorefresh) {
      this.callSearch();
    }
  }

  closeAutocomplete() {
    this.searchElement.nativeElement.value = this.mytext;
    this.showSuggestions = false;
    this.suggestionIndex = -1;
    this.tabIndex = 0;
  }

  showHide() {
    return this.showSuggestions;
  }

  getNoOfSuggestions() {
    return this.searchCategories[this.tabIndex].filteredItems.length;
  }

  getCurrentSuggestion(i: number) {
    if (i < 0) {
      return this.mytext;
    }
    if (this.searchCategories[this.tabIndex].filteredItems.length > 0) {
      return this.searchCategories[this.tabIndex].filteredItems[i];
    }
    return '';
  }

  /**
   * Show suggestions dropdown
   * and initialize suggestion index to -1
   */
  initSuggestionsDrop() {
    this.showSuggestions = true;
    this.suggestionIndex = -1;
  }

  nextSuggestion() {
    // hidden suggestions and no typed text
    // don't move through suggestions
    if (!this.showSuggestions && !this.mytext) {
      return;
    }

    // hidden suggestions and some typed text
    if (this.mytext && !this.showSuggestions) {

      // show suggestions dropdown first before going to an actual suggestion
      this.initSuggestionsDrop();
      return;
    }
    const n = this.getNoOfSuggestions();
    if (this.suggestionIndex === n - 1) {
      this.suggestionIndex = -1;
    } else {
      this.suggestionIndex++;
    }
    this.searchElement.nativeElement.value = this.getCurrentSuggestion(this.suggestionIndex);
  }

  prevSuggestion() {
    // hidden suggestions and no typed text
    // don't move through suggestions
    if (!this.showSuggestions && !this.mytext) {
      return;
    }

    // hidden suggestions and some typed text
    if (this.mytext && !this.showSuggestions) {

      // show suggestions dropdown first before going to an actual suggestion
      this.initSuggestionsDrop();
      return;
    }
    const n = this.getNoOfSuggestions();
    if (this.suggestionIndex === -1) {
      this.suggestionIndex = n - 1;
    } else {
      this.suggestionIndex--;
    }
    this.searchElement.nativeElement.value = this.getCurrentSuggestion(this.suggestionIndex);
  }

  somefunction(){
    console.log('backspace');
  }
}
