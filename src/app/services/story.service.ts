import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import Page from '../models/Page.model';
import Story from '../models/Story.model';
import Chapter from '../models/Chapter.model';
import Content from '../models/Content.model';
import Comment from '../models/Comment.model';


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
  setCurrentChapter(index) {
    this.currentChapter = this.currentStory.chapters[index];
  }

  // Get methods
  getAllStories(page):Observable<Page>{
    return this.http.get(`${environment.p2ApiUrl}/stories?page=${page}`, {withCredentials: true})
  }
  getStoryById(id):Observable<Story>{
    return this.http.get(`${environment.p2ApiUrl}/stories/${id}`, {withCredentials: true})
  }
  getStoriesForUser(page): Observable<Page> {
    return this.http.get(`${environment.p2ApiUrl}/stories?page=${page}&forUser=true`, {withCredentials: true})
  }

  // Create methods
  createStory(story: Story): Observable<Story> {
    return this.http.post<Story>(`${environment.p2ApiUrl}/stories`, story, {withCredentials: true})
  }
  createChapter(storyId: number, chapter: Chapter): Observable<Chapter> {
    return this.http.post<Chapter>(`${environment.p2ApiUrl}/stories/${storyId}/chapters`, chapter, {withCredentials: true})
  }
  createComment(storyId: number, comment: Comment): Observable<Comment> {
    return this.http.post<Comment>(`${environment.p2ApiUrl}/stories/${storyId}/comments`, comment, {withCredentials: true})
  }
  createContent(chapterId: number, content: Content): Observable<Content> {
    return this.http.post<Content>(`${environment.p2ApiUrl}/chapters/${chapterId}/contents`, content, {withCredentials: true})
  }

  // Edit methods
  editStory(story: Story): Observable<Story> {
    return this.http.put<Story>(`${environment.p2ApiUrl}/stories`, story, {withCredentials: true})
  }

  filterStories(page:number): Observable<Page>{
    let url = `${environment.p2ApiUrl}/stories?page=${page}&` 
    if(this.searchType==='Title'){
      url += 'query=' + this.searchQuery
    }
    else if(this.searchType === 'Tag'){
      url+= 'tag=' + this.searchQuery
    }
    else if(this.searchType === 'Genre'){
      url+= 'genre=' + this.searchQuery
    }
    console.log(url)
    return this.http.get(url,{withCredentials: true})
  }

}
