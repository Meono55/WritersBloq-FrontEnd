import { Component, OnInit } from '@angular/core';
import Story from '../../../models/Story.model';
import { StoryService } from '../../../services/story.service';
import { Subscription } from 'rxjs';
import { PopupMsgService } from '../../../services/popup-msg.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-story',
  templateUrl: './new-story.component.html',
  styleUrls: ['./new-story.component.scss']
})
export class NewStoryComponent implements OnInit {
  genres: Array<string> = ['Mystery', 'Horror', 'Sci-Fi', 'Fantasy', 'Romance']
  storySub: Subscription
  newStory: Story = {}
  newTags = ''
  loading = false

  constructor(
    private storyService: StoryService,
    private popup: PopupMsgService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  
  onSubmit() {
    this.loading = true
    this.newStory.tags = []
    for (let tag of this.newTags.split(',')) {
      this.newStory.tags.push({name: tag.trim()})
    }
    this.storySub = this.storyService.createStory(this.newStory).subscribe(story => {
      console.log(story)
      this.popup.showMsg(false, "Story created")
      this.router.navigateByUrl('/my-stories')
      this.loading = false
    }, (err: HttpErrorResponse) => {
      this.popup.showMsg(true, err.error)
      this.loading = false
    })
  }

}
