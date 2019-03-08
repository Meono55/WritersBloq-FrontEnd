import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Content from '../../../models/Content.model';
import { StoryService } from '../../../services/story.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { PopupMsgService } from '../../../services/popup-msg.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-manage-chapter',
  templateUrl: './manage-chapter.component.html',
  styleUrls: ['./manage-chapter.component.scss']
})
export class ManageChapterComponent implements OnInit {
  editor = ClassicEditor
  editing = false
  
  loading = false
  storiesService: StoryService
  chapterId: number
  currentContentIndex: number = 0
  currentContent: Content
  storyId: any
  nextChapterId : number
  newContent: Content = {contentData: ''}
  contentSub: Subscription


  constructor(
    private route: ActivatedRoute,
    private storyService: StoryService,
    private popup: PopupMsgService,
    private modalService: NgbModal,
    private router: Router
  ) { }

  ngOnInit() {
    this.storiesService = this.storyService
    this.route.params.subscribe(params => {
      this.chapterId = params['chapterId']
      this.storyId = params['storyId']
      this.currentContentIndex = 0
      this.getStoryById()
      this.storiesService.setCurrentChapter(this.chapterId)
      this.changeContent()
    })
    this.beforeEnter()

  }

  getStoryById(){
    this.loading = true
    this.storyService.getStoryById(this.storyId).subscribe((story) => {
      this.storyService.currentStory = story
      this.loading = false
    })
  }

  beforeEnter() {
    this.getStoryById()
  }

  changeContent() {
    if (this.storiesService.currentChapter.content.length > 0) {
      this.currentContent = this.storiesService.currentChapter.content[this.currentContentIndex]
    } else this.currentContent = undefined
  }

  open(modal) {
    this.modalService.open(modal, {size: 'lg'})
  }

  createContent() {
    this.newContent.contentType = 'Text'
    this.contentSub = this.storiesService.createContent(this.storiesService.currentChapter.id, this.newContent).subscribe(content => {
      this.popup.showMsg(false, 'Content created')
      this.newContent.contentData = ''
      this.modalService.dismissAll()
      this.router.navigateByUrl('/my-stories/' + this.storyId)
    }, (err: HttpErrorResponse) => {
      this.popup.showMsg(true, err.error)
    })
  }

}
