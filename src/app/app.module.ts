import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/general/navbar/navbar.component';
import { FooterComponent } from './components/general/footer/footer.component';
import { HomeBaseComponent } from './components/home/home-base/home-base.component';
import { TopFilterComponent } from './components/general/top-filter/top-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeBaseComponent,
    TopFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
