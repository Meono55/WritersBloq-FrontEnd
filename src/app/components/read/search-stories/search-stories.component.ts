import { Component, OnInit } from '@angular/core';
import { StoryService } from '../../../services/story.service';

@Component({
  selector: 'app-search-stories',
  templateUrl: './search-stories.component.html',
  styleUrls: ['./search-stories.component.scss']
})
export class SearchStoriesComponent implements OnInit {
  storyService: StoryService

  constructor(
    private storys: StoryService
  ) { }

  ngOnInit() {
    document.title = 'Search | WrBq'
    this.storyService = this.storys
  }

}
