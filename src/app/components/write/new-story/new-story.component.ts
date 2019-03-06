import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-story',
  templateUrl: './new-story.component.html',
  styleUrls: ['./new-story.component.scss']
})
export class NewStoryComponent implements OnInit {
  genres: Array<string> = ['Mystery', 'Horror', 'Sci-Fi', 'Fantasy', 'Romance']

  constructor() { }

  ngOnInit() {
  }

}
