import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StoryService {
  possibleTypes: Array<string> = ['Title', 'Tag', 'Genre']
  searchType: string = this.possibleTypes[0]
  searchQuery: string

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


}
