import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeBaseComponent } from './components/home/home-base/home-base.component';
import { LoginBaseComponent } from './components/login/login-base/login-base.component';
import { RegisterBaseComponent } from './components/register/register-base/register-base.component';
import { SearchBaseComponent } from './components/search/search-base/search-base.component';
import { SearchPageComponent } from './components/search/search-page/search-page.component';

const routes: Routes = [
  {path: '', component: HomeBaseComponent},
  {path: 'login', component: LoginBaseComponent},
  {path: 'register', component: RegisterBaseComponent},
  {
    path: 'search', 
    component: SearchBaseComponent,
    children: [
      {path: '', component: SearchPageComponent},
      {path: ':pageNumber', component: SearchPageComponent}
    ]
  },
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
