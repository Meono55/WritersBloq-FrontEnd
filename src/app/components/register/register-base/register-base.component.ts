import { Component, OnInit, OnDestroy } from '@angular/core';
import { PopupMsgService } from 'src/app/services/popup-msg.service';
import { AuthService } from '../../../services/auth.service';
import User from '../../../models/User.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register-base',
  templateUrl: './register-base.component.html',
  styleUrls: ['./register-base.component.scss']
})
export class RegisterBaseComponent implements OnInit, OnDestroy {

  date
  isDisabled: boolean = true

  user: User = {}
  password2: string

  registerSub: Subscription


  constructor(
    private popupService: PopupMsgService,
    private auth: AuthService
  ) { }

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

  register() {
    this.registerSub = this.auth.register(this.user).subscribe(user => {
      this.auth.currentUser = user
    })
  }

  ngOnDestroy() {
    this.registerSub.unsubscribe()
  }

}
