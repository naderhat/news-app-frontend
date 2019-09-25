import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SearchEverythingComponent } from 'src/app/search-everything/search-everything.component';
import { SearchTopHeadlinesComponent } from 'src/app/search-top-headlines/search-top-headlines.component';
import { SourcesListComponent } from 'src/app/sources-list/sources-list.component';

const appRoutes: Routes = [
  { path: 'search-everything', component: SearchEverythingComponent },
  { path: 'search-top-headlines', component: SearchTopHeadlinesComponent },
  { path: 'news-sources', component: SourcesListComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
