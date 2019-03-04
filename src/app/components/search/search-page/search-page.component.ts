import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  pages: Array<number> = [0, 1, 2, 3, 4, 5, 6]
  currentPage: number = this.pages[0]

  constructor() { }

  ngOnInit() {
    
  }

}
