import { Component, OnInit } from '@angular/core';
import { PopupMsgService } from 'src/app/services/popup-msg.service';

@Component({
  selector: 'app-popup-msg',
  templateUrl: './popup-msg.component.html',
  styleUrls: ['./popup-msg.component.scss']
})
export class PopupMsgComponent implements OnInit {

  popup : PopupMsgService

  constructor(private popupmsg : PopupMsgService) { }

  ngOnInit() {
    this.popup = this.popupmsg
  }

}
