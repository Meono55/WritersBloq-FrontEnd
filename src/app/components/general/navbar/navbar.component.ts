import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  loading = false
  navCollapsed = true
  auth: AuthService

  constructor(
    private authService: AuthService,
    private ngbModal: NgbModal,
    private router: Router
  ) { }

  ngOnInit() {
    this.auth = this.authService
  }

  open(content) {
    this.ngbModal.open(content)
  }

  logout() {
    this.loading = true
    this.authService.logout().subscribe(res => {
      this.authService.currentUser = undefined
      this.loading = false
      this.router.navigateByUrl('/')
    })
  }

}
