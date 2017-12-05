import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent {
  email: string;
  password: string;

  constructor(public authService: AuthService) { }

  login() {
    this.authService.login(this.email, this.password);
    this.email = this.password = ' ';
  }

  logout() {
    this.authService.logout();
  }
}
