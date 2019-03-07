import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoryService } from 'src/app/services/story.service';

@Component({
  selector: 'app-story-view',
  templateUrl: './story-view.component.html',
  styleUrls: ['./story-view.component.scss']
})
export class StoryViewComponent implements OnInit {

  storyId:any
  storiesService: StoryService
  loading = false


  constructor(
    private route: ActivatedRoute,
    private storyService: StoryService) { }

  ngOnInit() {
    this.storiesService = this.storyService
    this.storyId = this.route.snapshot.paramMap.get('storyId')
    this.getStoryById()
  }

  getStoryById(){
    this.loading = true
    this.storyService.getStoryById(this.storyId).subscribe((story) => {
      this.storyService.currentStory = story
      this.loading = false
      console.log(this.storyService.currentStory)
    })
    
  }

}
