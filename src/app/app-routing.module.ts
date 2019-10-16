import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SearchEverythingComponent } from 'src/app/search-everything/search-everything.component';
import { SearchTopHeadlinesComponent } from 'src/app/search-top-headlines/search-top-headlines.component';
import { SourcesListComponent } from 'src/app/sources-list/sources-list.component';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { UserRegistrationComponent } from 'src/app/user-registration/user-registration.component';
import { HomeComponent } from 'src/app/home/home.component';
import { LoginComponent } from 'src/app/login/login.component';
import { ProfileComponent } from './profile/profile.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'register', component: UserRegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register-user', component: UserRegistrationComponent },
  { path: 'search-everything', component: SearchEverythingComponent },
  { path: 'search-top-headlines', component: SearchTopHeadlinesComponent },
  { path: 'news-sources', component: SourcesListComponent },
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
