import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Page from '../models/Page.model';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import Story from '../models/Story.model';
import Chapter from '../models/Chapter.model';

@Injectable({
  providedIn: 'root'
})
export class StoryService {
  possibleTypes: Array<string> = ['Title', 'Tag', 'Genre']
  searchType: string = this.possibleTypes[0]
  searchQuery: string
  currentStoryPage: Page
  currentStory: Story
  currentChapter : Chapter

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Changes the type of searching the user is currently doing
   * @param type - new type to search by
   */
  changeSearchType (type: string) {
    this.searchType = type
    this.searchQuery = ''
  }
  getAllStories(page):Observable<Page>{
    return this.http.get(`${environment.p2ApiUrl}/stories?page=${page}`, {withCredentials: true})
  }
  getStoryById(id):Observable<Story>{
    return this.http.get(`${environment.p2ApiUrl}/stories/${id}`, {withCredentials: true})
  }
  // getChapterById(id):Observable<Chapter>{
  //   return this.http.get(`${environment.p2ApiUrl}/chapters/${id}`, {withCredentials: true})
  // }
  setCurrentChapter(index) {
    this.currentChapter = this.currentStory.chapters[index];
  }

}
