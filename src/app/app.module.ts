import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SearchResultComponent } from './search-result/search-result.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    ToolbarComponent,
    MenuComponent,
    SearchResultsComponent,
    SearchResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
