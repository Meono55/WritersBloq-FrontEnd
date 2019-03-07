import { Component, OnInit, OnDestroy } from '@angular/core';
import { StoryService } from '../../../services/story.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-stories',
  templateUrl: './search-stories.component.html',
  styleUrls: ['./search-stories.component.scss']
})
export class SearchStoriesComponent implements OnInit, OnDestroy {

  storyService: StoryService
  storiesSub: Subscription
  pages: Array<number> = [0, 1, 2, 3, 4, 5, 6]
  currentPage: number = this.pages[0]
  loading = false

  constructor(
    private storys: StoryService
  ) { }

  ngOnInit() {
    document.title = 'Search | WrBq'
    this.storyService = this.storys
    this.getStories()
  }


  getStories() {
    this.loading = true
    this.storiesSub = this.storyService.getAllStories(this.currentPage).subscribe(page => {
      this.storyService.currentStoryPage = page
      console.log(this.storyService.currentStoryPage)
      this.loading = false
    })
  }
  ngOnDestroy(){
    if(this.storiesSub) this.storiesSub.unsubscribe()
  }

}
