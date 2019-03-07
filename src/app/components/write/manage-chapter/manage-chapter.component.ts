import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-manage-chapter',
  templateUrl: './manage-chapter.component.html',
  styleUrls: ['./manage-chapter.component.scss']
})
export class ManageChapterComponent implements OnInit {
  editor = ClassicEditor
  editing = false

  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit() {
  }

  open(modal) {
    this.modalService.open(modal, {size: 'lg'})
  }

}
