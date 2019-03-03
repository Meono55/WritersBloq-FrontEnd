import { Component, OnInit, OnDestroy } from '@angular/core';
import { PopupMsgService } from 'src/app/services/popup-msg.service';
import { AuthService } from '../../../services/auth.service';
import User from '../../../models/User.model';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-base',
  templateUrl: './register-base.component.html',
  styleUrls: ['./register-base.component.scss']
})
export class RegisterBaseComponent implements OnInit, OnDestroy {
  loading = false
  date: any
  isDisabled: boolean = true

  user: User = {}
  password2: string

  registerSub: Subscription


  constructor(
    private popup: PopupMsgService,
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.beforeEnter()
    document.title = 'Register | WrBq'
  }

  beforeEnter() {
    if (this.auth.currentUser) this.router.navigateByUrl('/')
  }

  validateDate() {
    if (this.date) {
      let dob = new Date(this.date.year, this.date.month - 1, this.date.day)
      let age = 13
      let now = new Date()
      now.setFullYear(now.getFullYear() - age)
      this.user.dob = dob.valueOf()
      if ((now.valueOf() - dob.valueOf()) < 0) {
        this.popup.showMsg(true, 'You must be above the age of 13 to register!')
      } else {
        this.isDisabled = false;
      }
    } else{
      this.popup.showMsg(true, 'Please choose a date!')
    }
  }

  register() {
    this.loading = true
    this.registerSub = this.auth.register(this.user).subscribe(user => {
      this.auth.currentUser = user
      this.popup.showMsg(false, 'Registeration complete!')
      this.loading = false
      this.router.navigateByUrl('/')
    }, (err: HttpErrorResponse) => {
      this.popup.showMsg(true, err.error)
      this.loading = false
    })
  }

  ngOnDestroy() {
    if (this.registerSub) this.registerSub.unsubscribe()
  }

}
