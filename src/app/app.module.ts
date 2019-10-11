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
import { SearchEverythingComponent } from './search-everything/search-everything.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatePipe } from '@angular/common';
import { SearchTopHeadlinesComponent } from './search-top-headlines/search-top-headlines.component';
import { AppRoutingModule } from './/app-routing.module';
import { SourceComponent } from './source/source.component';
import { SourcesListComponent } from './sources-list/sources-list.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AlertComponent } from './alert/alert.component';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpIntercepterAuthService } from './services/intercepter-auth.service';
import { NewsCategoryComponent } from './news-category/news-category.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    ToolbarComponent,
    MenuComponent,
    SearchResultsComponent,
    SearchResultComponent,
    SearchEverythingComponent,
    SearchTopHeadlinesComponent,
    SourceComponent,
    SourcesListComponent,
    UserRegistrationComponent,
    HomeComponent,
    LoginComponent,
    AlertComponent,
    HeaderComponent,
    ProfileComponent,
    NewsCategoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgxPaginationModule
  ],
  providers: [DatePipe, { provide: HTTP_INTERCEPTORS, useClass: HttpIntercepterAuthService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
