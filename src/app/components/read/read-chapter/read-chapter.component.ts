import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-read-chapter',
  templateUrl: './read-chapter.component.html',
  styleUrls: ['./read-chapter.component.scss']
})
export class ReadChapterComponent implements OnInit {



  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    
  }

}
