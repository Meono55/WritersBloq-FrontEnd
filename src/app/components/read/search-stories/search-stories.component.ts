import { Component, OnInit } from '@angular/core';
import { StoryService } from '../../../services/story.service';

@Component({
  selector: 'app-search-stories',
  templateUrl: './search-stories.component.html',
  styleUrls: ['./search-stories.component.scss']
})
export class SearchStoriesComponent implements OnInit {
  storyService: StoryService
  pages: Array<number> = [0, 1, 2, 3, 4, 5, 6]
  currentPage: number = this.pages[0]

  constructor(
    private storys: StoryService
  ) { }

  ngOnInit() {
    document.title = 'Search | WrBq'
    this.storyService = this.storys
  }

}
