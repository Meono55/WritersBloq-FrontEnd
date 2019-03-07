import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-manage-story',
  templateUrl: './manage-story.component.html',
  styleUrls: ['./manage-story.component.scss']
})
export class ManageStoryComponent implements OnInit {
  loading = false
  newChapterName: string

  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit() {
  }

  open(modal) {
    this.modalService.open(modal)
  }

  createChapter() {

  }

}
