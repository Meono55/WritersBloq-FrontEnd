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
  pages: Array<number> = []
  currentPage: number = 0
  loading = false

  constructor(
    private storys: StoryService
  ) { }

  ngOnInit() {
    document.title = 'Search | WrBq'
    this.storyService = this.storys
    this.getStories()
  }

  populatePages(max: number) {
    for (let i = 0; i < max; i++) {
      this.pages.push(i)
    }
  }


  getStories() {
    this.loading = true
    this.storiesSub = this.storyService.getAllStories(this.currentPage).subscribe(page => {
      this.storyService.currentStoryPage = page
      let pageMax = page.resultCount % page.pageSize > 0 ? Math.floor(page.resultCount / page.pageSize) + 1 : (page.resultCount / page.pageSize)
      this.populatePages(pageMax)
      this.loading = false
    })
  }

  filterStories(){
    this.loading=true
    this.storyService.filterStories(this.currentPage).subscribe((page) => {
      this.storyService.currentStoryPage = page
      this.loading = false
    })

  }
  ngOnDestroy(){
    if(this.storiesSub) this.storiesSub.unsubscribe()
  }

}
