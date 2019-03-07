import { Component, OnInit } from '@angular/core';
import Story from '../../../models/Story.model';
import { StoryService } from '../../../services/story.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-new-story',
  templateUrl: './new-story.component.html',
  styleUrls: ['./new-story.component.scss']
})
export class NewStoryComponent implements OnInit {
  genres: Array<string> = ['Mystery', 'Horror', 'Sci-Fi', 'Fantasy', 'Romance']
  storySub: Subscription
  newStory: Story = {}

  constructor(
    private storyService: StoryService
  ) { }

  ngOnInit() {
  }

  

  onSubmit() {
    // this.storySub = this.storyService
  }

}
