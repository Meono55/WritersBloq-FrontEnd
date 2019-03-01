import { Component, OnInit } from '@angular/core';
import { PopupMsgService } from 'src/app/services/popup-msg.service';

@Component({
  selector: 'app-register-base',
  templateUrl: './register-base.component.html',
  styleUrls: ['./register-base.component.scss']
})
export class RegisterBaseComponent implements OnInit {

  date

  isDisabled: boolean = true



  constructor(private popupService: PopupMsgService) { }

  ngOnInit() {
    document.title = 'Register | WrBq'
  }

  validateDate() {
    if (this.date) {
      let dob = new Date(this.date.year, this.date.month - 1, this.date.day)
      let age = 13
      let now = new Date()
      now.setFullYear(now.getFullYear() - age)
      if ((now.valueOf() - dob.valueOf()) < 0) {
        this.popupService.showMsg(true, 'You must be above the age of 13 to register!')
      } else {
        this.isDisabled = false;
      }
    } else{
      this.popupService.showMsg(true, 'Please choose a date!')
    }

  }

}
