import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  user:User = {
    uid: '',
    displayName: '',
    email: '',
    photoURL: '',
  }
  constructor(
    private auth: AuthService,
    private userService: UserService) {}

  ngOnInit() {
    this.auth.user.subscribe(u => {
      this.user = u;
    });
  }

  update() {
    console.log(this.user);
    this.userService.updateUserData(this.user);
  }
}
