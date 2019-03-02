import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login-base',
  templateUrl: './login-base.component.html',
  styleUrls: ['./login-base.component.scss']
})
export class LoginBaseComponent implements OnInit, OnDestroy {
  email: string
  password: string
  loginSub: Subscription 

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit() {
    document.title = 'Login | WrBq'
  }

  login() {
    this.loginSub = this.auth.login(this.email, this.password).subscribe(user => {
      this.auth.currentUser = user
    })
  }

  ngOnDestroy() {
    this.loginSub.unsubscribe()
  }

}
