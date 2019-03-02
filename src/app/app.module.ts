import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/general/navbar/navbar.component';
import { FooterComponent } from './components/general/footer/footer.component';
import { HomeBaseComponent } from './components/home/home-base/home-base.component';
import { TopFilterComponent } from './components/general/top-filter/top-filter.component';
import { StoryCardComponent } from './components/general/story-card/story-card.component';
import { LoginBaseComponent } from './components/login/login-base/login-base.component';
import { RegisterBaseComponent } from './components/register/register-base/register-base.component';
import { FormsModule } from '@angular/forms';
import { PopupMsgComponent } from './components/general/popup-msg/popup-msg.component';
import { PopupMsgService } from './services/popup-msg.service';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeBaseComponent,
    TopFilterComponent,
    StoryCardComponent,
    LoginBaseComponent,
    RegisterBaseComponent,
    PopupMsgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PopupMsgService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
