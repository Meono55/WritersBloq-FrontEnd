import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeBaseComponent } from './components/home/home-base/home-base.component';
import { LoginBaseComponent } from './components/login/login-base/login-base.component';
import { RegisterBaseComponent } from './components/register/register-base/register-base.component';
import { SearchStoriesComponent } from './components/read/search-stories/search-stories.component';
import { StoryViewComponent } from './components/read/story-view/story-view.component';
import { MyStoriesComponent } from './components/write/my-stories/my-stories.component';
import { NewStoryComponent } from './components/write/new-story/new-story.component';
import { ManageStoryComponent } from './components/write/manage-story/manage-story.component';
import { ReadChapterComponent } from './components/read/read-chapter/read-chapter.component';
import { ManageChapterComponent } from './components/write/manage-chapter/manage-chapter.component';

const routes: Routes = [
  {path: '', component: HomeBaseComponent},
  {path: 'login', component: LoginBaseComponent},
  {path: 'register', component: RegisterBaseComponent},
  {path: 'stories', component: SearchStoriesComponent},
  {path: 'stories/:storyId', component: StoryViewComponent},
  {path: 'stories/:storyId/chapters/:chapterId', component: ReadChapterComponent},
  {path: 'stories/:storyId/chapters', redirectTo: '/stories/:storyId'},
  {path: 'my-stories', component: MyStoriesComponent},
  {path: 'my-stories/new', component: NewStoryComponent},
  {path: 'my-stories/:storyId', component: ManageStoryComponent},
  {path: 'my-stories/:storyId/chapters/:chapterId', component: ManageChapterComponent},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
