import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { StoryService } from '../../../services/story.service';
import Chapter from '../../../models/Chapter.model';
import Comment from '../../../models/Comment.model';

@Component({
  selector: 'app-manage-story',
  templateUrl: './manage-story.component.html',
  styleUrls: ['./manage-story.component.scss']
})
export class ManageStoryComponent implements OnInit {

  storyId: any
  storiesService: StoryService
  loading = false
  chapter: Chapter
  comment: Comment = {}



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
    })
  }
  createComment(){
    this.storyService.createComment(this.storyId, this.comment).subscribe((storyComment) => {
      this.comment.content = ' '
      this.getStoryById()
    })
  }

}
