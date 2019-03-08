import { Component, OnInit } from '@angular/core';
import { StoryService } from '../../../services/story.service';

@Component({
  selector: 'app-home-base',
  templateUrl: './home-base.component.html',
  styleUrls: ['./home-base.component.scss']
})
export class HomeBaseComponent implements OnInit {
  storyService: StoryService

  constructor(
    private storys: StoryService
  ) { }

  ngOnInit() {
    this.storyService = this.storys
  }

  search() {
    // TODO
  }

}
