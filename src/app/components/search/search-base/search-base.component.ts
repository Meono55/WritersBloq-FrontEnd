import { Component, OnInit } from '@angular/core';
import { StoryService } from '../../../services/story.service';

@Component({
  selector: 'app-search-base',
  templateUrl: './search-base.component.html',
  styleUrls: ['./search-base.component.scss']
})
export class SearchBaseComponent implements OnInit {
  storyService: StoryService

  constructor(
    private storys: StoryService
  ) { }

  ngOnInit() {
    document.title = 'Search | WrBq'
    this.storyService = this.storys
  }

}
