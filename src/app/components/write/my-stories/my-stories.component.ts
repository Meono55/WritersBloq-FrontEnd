import { Component, OnInit } from '@angular/core';
import { StoryService } from '../../../services/story.service';

@Component({
  selector: 'app-my-stories',
  templateUrl: './my-stories.component.html',
  styleUrls: ['./my-stories.component.scss']
})
export class MyStoriesComponent implements OnInit {
  storyService: StoryService
  pages: Array<number> = [0, 1]
  currentPage: number = this.pages[0]

  constructor(
    private storys: StoryService
  ) { }

  ngOnInit() {
    document.title = 'Search | WrBq'
    this.storyService = this.storys
  }

}
