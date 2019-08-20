import { Component, OnInit } from '@angular/core';
import { UserGroupService } from 'src/app/services/firestore/user-group.service';
import { AuthService } from 'src/app/services/firestore/auth.service';
import { Observable } from 'rxjs';
import { UserGroup } from 'src/app/models/user-group';

@Component({
  selector: 'app-user-group',
  templateUrl: './user-group.component.html',
  styleUrls: ['./user-group.component.scss']
})
export class UserGroupComponent implements OnInit {
  groupNameText = '';
  userGroup$?: Observable<UserGroup | undefined>;
  userGroups: UserGroup[] = [];
  constructor(
    private auth: AuthService,
    private userGroupService: UserGroupService
  ) { }

  ngOnInit() {
  }
  onClick() {
    const userGroup = new UserGroup();
    userGroup.admin = true;
    userGroup.groupName = this.groupNameText;
    this.userGroups.push(userGroup);
    this.userGroupService.addUserGroup(this.userGroups);
  }
}
