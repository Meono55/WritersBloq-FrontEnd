import { Component, OnInit } from '@angular/core';
import { StoryService } from '../../../services/story.service';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { PopupMsgService } from '../../../services/popup-msg.service';

@Component({
  selector: 'app-my-stories',
  templateUrl: './my-stories.component.html',
  styleUrls: ['./my-stories.component.scss']
})
export class MyStoriesComponent implements OnInit {
  storyService: StoryService
  storySub: Subscription
  loading = false
  pages: Array<number> = []
  currentPage: number = 0

  constructor(
    private storys: StoryService,
    private popup: PopupMsgService
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
    this.storySub = this.storyService.getStoriesForUser(this.currentPage).subscribe(page => {
      this.storyService.currentStoryPage = page
      let pageMax = page.resultCount % page.pageSize > 0 ? Math.floor(page.resultCount / page.pageSize) + 1 : (page.resultCount / page.pageSize)
      this.populatePages(pageMax)
      this.loading = false
    }, (err: HttpErrorResponse) => {
      this.popup.showMsg(true, err.error)
      this.loading = false
    })
  }

}
