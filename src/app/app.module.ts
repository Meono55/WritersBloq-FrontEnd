import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular'

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
import { StoryService } from './services/story.service';
import { SearchStoriesComponent } from './components/read/search-stories/search-stories.component';
import { StoryViewComponent } from './components/read/story-view/story-view.component';
import { MyStoriesComponent } from './components/write/my-stories/my-stories.component';
import { NewStoryComponent } from './components/write/new-story/new-story.component';
import { MyStoryCardComponent } from './components/general/my-story-card/my-story-card.component';
import { ManageStoryComponent } from './components/write/manage-story/manage-story.component';
import { ReadChapterComponent } from './components/read/read-chapter/read-chapter.component';
import { ManageChapterComponent } from './components/write/manage-chapter/manage-chapter.component';
import { WriteContentComponent } from './components/write/write-content/write-content.component';

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
    PopupMsgComponent,
    SearchStoriesComponent,
    StoryViewComponent,
    MyStoriesComponent,
    NewStoryComponent,
    MyStoryCardComponent,
    ManageStoryComponent,
    ReadChapterComponent,
    ManageChapterComponent,
    WriteContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    CKEditorModule
  ],
  providers: [PopupMsgService, AuthService, StoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
