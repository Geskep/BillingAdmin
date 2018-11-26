import { Component } from '@angular/core';
import {AuthService} from '../../../services/auth';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})
export class LoginComponent {

  username: string;
  password: string;
  failed: boolean;

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    this.auth.login(this.username, this.password).subscribe(
      (user) => {
        console.log(user);
        this.failed = false;
        localStorage.setItem('userData', JSON.stringify(user));
        this.router.navigate(['/']);
      },
      () => { this.failed = true; }
    );
  }
}
