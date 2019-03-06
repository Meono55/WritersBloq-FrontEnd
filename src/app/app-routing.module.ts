import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeBaseComponent } from './components/home/home-base/home-base.component';
import { LoginBaseComponent } from './components/login/login-base/login-base.component';
import { RegisterBaseComponent } from './components/register/register-base/register-base.component';
import { SearchStoriesComponent } from './components/read/search-stories/search-stories.component';
import { StoryViewComponent } from './components/read/story-view/story-view.component';
import { WriteBaseComponent } from './components/write/write-base/write-base.component';
import { MyStoriesComponent } from './components/write/my-stories/my-stories.component';
import { NewStoryComponent } from './components/write/new-story/new-story.component';
import { ManageStoryComponent } from './components/write/manage-story/manage-story.component';
import { StoryBaseComponent } from './components/write/story-base/story-base.component';

const routes: Routes = [
  {path: '', component: HomeBaseComponent},
  {path: 'login', component: LoginBaseComponent},
  {path: 'register', component: RegisterBaseComponent},
  // {path: 'dashboard'},
  {path: 'stories', component: SearchStoriesComponent},
  {path: 'stories/:storyId', component: StoryViewComponent},
  // {path: 'stories/:storyId/chapters', redirectTo: '/stories/:storyId'},
  // {path: 'stories/:storyId/chapters/:chapterId'}, 
  {
    path: 'my-stories', 
    component: WriteBaseComponent,
    children: [
      {path: '', component: MyStoriesComponent},
      {path: 'new', component: NewStoryComponent},
      {
        path: ':storyId',
        component: StoryBaseComponent,
        children: [
          {path: '', component: ManageStoryComponent}
          // {
          //   path: ':chapterId'
          // },
          // {path: 'chapters', redirectTo: '/my-stories/:storyId'}
        ]
      }
    ]
  },
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
