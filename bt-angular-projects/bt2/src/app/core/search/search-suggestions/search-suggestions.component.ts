import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bt-search-suggestions',
  templateUrl: './search-suggestions.component.html',
  styleUrls: ['./search-suggestions.component.scss']
})
export class SearchSuggestionsComponent implements OnInit {
  @Input() items = [];
  @Input() filterValue: string;
  @Input() indexHighlight = -1;
  @Input() query: string;
  @Output() indexHighlightChange = new EventEmitter();
  @Output() itemSelected = new EventEmitter();

  high = [];
  constructor() {
  }

  ngOnInit() {
    if (this.indexHighlight >= 0) {
      this.high[this.indexHighlight] = true;
    }
  }

  clickedItem(i: number) {
    this.itemSelected.emit(this.items[i]);
  }

  onMouseover(i: number) {
    this.high[this.indexHighlight] = false;
    this.high[i] = true;
    this.indexHighlight = i;
    this.indexHighlightChange.emit(this.indexHighlight);
  }

  onMouseout(i: number) {
    this.high[i] = false;
  }

  checkIndex(i: number) {
    return this.indexHighlight === i;
  }

  // highlight() {
  //   if (!this.query) {
  //     return this.content;
  //   }
  //   return this.content.replace(new RegExp(this.query, "gi"), match => {
  //     return '<span class="highlightText">' + match + '</span>';
  //   });
  // }
}
