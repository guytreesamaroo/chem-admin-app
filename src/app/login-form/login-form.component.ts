import { Component} from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  email: string;
  password: string;

  constructor(public authService: AuthService) {}

  login() {
    this.authService.login(this.email, this.password);
    this.email = this.password = ' ';
  }

  logout() {
    this.authService.logout();
  }
}
