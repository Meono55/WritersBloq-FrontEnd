import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from './services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  getUserSub: Subscription

  constructor (
    private auth: AuthService
  ) {}

  ngOnInit () {
    this.getUserSub = this.auth.getLoggedInUser().subscribe(user => {
      this.auth.currentUser = user
    }, (err: HttpErrorResponse) => {})
  }

  ngOnDestroy() {
    if (this.getUserSub) this.getUserSub.unsubscribe()
  }

}
