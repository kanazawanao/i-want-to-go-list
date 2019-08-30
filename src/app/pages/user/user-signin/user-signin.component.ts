import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/firestore/auth.service';

@Component({
  selector: 'app-user-signin',
  templateUrl: './user-signin.component.html',
  styleUrls: ['./user-signin.component.scss']
})
export class UserSigninComponent implements OnInit {
  emailText = '';
  passwordText = '';
  constructor(private router: Router, private auth: AuthService) {}

  ngOnInit() {
    this.auth.user.subscribe(user => {
      if (user !== null) {
        this.router.navigate(['/']);
      }
    });
  }

  signIn() {
    this.auth.signIn(this.emailText, this.passwordText).then(() => {
      this.router.navigate(['/']);
    });
  }

  googleSignIn() {
    this.auth.googleSignIn().then(() => {
      this.router.navigate(['/']);
    });
  }
}
