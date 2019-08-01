import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  email = '';
  password = '';
  constructor(private router: Router, private auth: AuthService) {}

  ngOnInit() {
    // ログイン済みならユーザーinfoへ
    this.auth.user.subscribe(user => {
      if (user !== null) {
        this.router.navigate(['/']);
      }
    });
  }

  login() {
    this.auth.login(this.email, this.password).then(() => {
      this.router.navigate(['/']);
    });
  }

  googleLogin() {
    this.auth.googleLogin().then(() => {
      this.router.navigate(['/']);
    });
  }
}
