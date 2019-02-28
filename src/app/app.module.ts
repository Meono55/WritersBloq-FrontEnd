import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/general/navbar/navbar.component';
import { FooterComponent } from './components/general/footer/footer.component';
import { HomeBaseComponent } from './components/home/home-base/home-base.component';
import { TopFilterComponent } from './components/general/top-filter/top-filter.component';
import { StoryCardComponent } from './components/general/story-card/story-card.component';
import { LoginBaseComponent } from './components/login/login-base/login-base.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeBaseComponent,
    TopFilterComponent,
    StoryCardComponent,
    LoginBaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
