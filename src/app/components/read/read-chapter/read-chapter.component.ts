import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StoryService } from 'src/app/services/story.service';
import Content from 'src/app/models/Content.model';

@Component({
  selector: 'app-read-chapter',
  templateUrl: './read-chapter.component.html',
  styleUrls: ['./read-chapter.component.scss']
})
export class ReadChapterComponent implements OnInit {

  loading = false
  storiesService: StoryService
  chapterId: number
  currentContentIndex: number = 0
  currentContent: Content
  storyId: any
  nextChapterId : number


  constructor(
    private route: ActivatedRoute,
    private storyService: StoryService,
    private router: Router) {

  }

  ngOnInit() {
    this.storiesService = this.storyService
    this.route.params.subscribe(params => {
      this.chapterId = params['chapterId']
      this.storyId = params['storyId']
      this.currentContentIndex = 0
      this.storiesService.setCurrentChapter(this.chapterId)
      this.changeContent()
    })
    // this.storiesService.setCurrentChapter(this.chapterId)
    // this.changeContent()
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
  
  nextContent(){
    this.currentContentIndex++
    this.changeContent()
  }
  prevContent(){
    this.currentContentIndex--
    this.changeContent()
  }

  nextChapter() {
    this.chapterId++
    this.router.navigateByUrl('/stories/'+ this.storyId +'/chapters/'+ this.chapterId)
  }
  previousChapter(){
    this.chapterId--
    this.router.navigateByUrl('/stories/'+ this.storyId +'/chapters/'+ this.chapterId)
  }




}
