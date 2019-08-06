import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-singup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.scss']
})
export class UserSignupComponent implements OnInit {
  email = '';
  password = '';
  constructor(private router: Router, private auth: AuthService) {}

  ngOnInit() {}

  signup() {
    // TODO: 入力内容のチェックを行う。NGだったらエラー表示。
    this.auth.siginUp(this.email, this.password).then(x => {
      this.router.navigate(['/']);
    });
    // TODO: 登録できなかったらエラーを画面に表示する
  }
}
