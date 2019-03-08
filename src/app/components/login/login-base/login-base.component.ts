import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Subscription } from 'rxjs';
import { PopupMsgService } from '../../../services/popup-msg.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-base',
  templateUrl: './login-base.component.html',
  styleUrls: ['./login-base.component.scss']
})
export class LoginBaseComponent implements OnInit, OnDestroy {
  loading = false
  email: string
  password: string
  loginSub: Subscription 

  constructor(
    private auth: AuthService,
    private popup: PopupMsgService,
    private router: Router
  ) { }

  ngOnInit() {
    this.beforeEnter()
    document.title = 'Login | WrBq'
  }

  beforeEnter() {
    if (this.auth.currentUser) this.router.navigateByUrl('/')
  }

  login() {
    this.loading = true
    this.loginSub = this.auth.login(this.email, this.password).subscribe(user => {
      this.auth.currentUser = user
      this.loading = false
      this.router.navigateByUrl('/')
    }, (err: HttpErrorResponse) => {
      this.popup.showMsg(true, err.error)
      this.loading = false
    })
  }

  ngOnDestroy() {
    if (this.loginSub) this.loginSub.unsubscribe()
  }

}
