import { Component, OnInit, Renderer2, Input } from '@angular/core';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';
import {Router} from '@angular/router';

@Component({
  selector: 'app-bt-search-browse-jump',
  templateUrl: './search-browse-jump.component.html',
  styleUrls: ['./search-browse-jump.component.scss']
})
export class SearchBrowseJumpComponent implements OnInit {
  @Input() home: boolean|string;
  constructor(private renderer: Renderer2, private scrollToService: ScrollToService, private router: Router) {
    this.home = false;
  }

  ngOnInit() {
    this.home = (this.home === 'true' || this.home === true ? true : false);
  }

  focusSearch() {
    Array.from(document.getElementsByClassName('browse-toggle')).forEach(el => {
      this.renderer.removeClass(el, 'active');
    });
    Array.from(document.getElementsByClassName('search-toggle')).forEach(el => {
      this.renderer.addClass(el, 'active');
    });

    const searchBox = this.renderer.selectRootElement('#tool-search');
    setTimeout(() => searchBox.focus(), 0);
  }

  focusBrowse() {
    Array.from(document.getElementsByClassName('search-toggle')).forEach(el => {
      this.renderer.removeClass(el, 'active');
    });
    Array.from(document.getElementsByClassName('browse-toggle')).forEach(el => {
      this.renderer.addClass(el, 'active');
    });
  }

  handleBrowseScroll() {
    this.focusBrowse();
    // this needs to scrool down to edam browsing if we are on the homepage
    // or go to a browse page if we are not home
    // since we have the (Search | Browse) buttons in two place we need to make a service
    if (this.home === true) {
      console.log('I am home, scroll to browse');
      const config: ScrollToConfigOptions = {
        target: 'browse-topic'
      };
      this.scrollToService.scrollTo(config);
    } else {
      this.router.navigateByUrl('/browse');
    }
  }

}
