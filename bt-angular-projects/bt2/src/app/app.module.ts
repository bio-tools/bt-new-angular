import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ToolsComponent } from './tools/tools.component';
import { StatsComponent } from './stats/stats.component';
import { SpinnerComponent } from './core/spinner/spinner.component';
import { SmallSpinnerComponent } from './core/small-spinner/small-spinner.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import { SearchComponent } from './core/search/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchSuggestionsComponent } from './core/search/search-suggestions/search-suggestions.component';
import { ClickOutsideDirective } from './core/directives/click-outside.directive';
import { HighlightSearchPipe } from './core/search/highlight.pipe';
import { WhatIsBiotoolsComponent } from './home/what-is-biotools/what-is-biotools.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { SearchBrowseJumpComponent } from './core/components/search-browse-jump/search-browse-jump.component';
import { BrowseComponent } from './browse/browse.component';
import { EdamStartTermsComponent } from './browse/edam-start-terms/edam-start-terms.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ToolsComponent,
    StatsComponent,
    SpinnerComponent,
    SmallSpinnerComponent,
    SearchComponent,
    SearchSuggestionsComponent,
    ClickOutsideDirective,
    HighlightSearchPipe,
    WhatIsBiotoolsComponent,
    SearchBrowseJumpComponent,
    BrowseComponent,
    EdamStartTermsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatChipsModule,
    MatIconModule,
    ScrollToModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
