import { Component, OnInit } from '@angular/core';
import { UserGroupService } from 'src/app/services/firestore/user-group.service';
import { Observable } from 'rxjs';
import { UserGroup } from 'src/app/models/user-group';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-user-group',
  templateUrl: './user-group.component.html',
  styleUrls: ['./user-group.component.scss']
})
export class UserGroupComponent implements OnInit {
  groupNameText = '';
  userGroup$?: Observable<UserGroup[] | undefined>;
  userGroups: UserGroup[] = [];
  constructor(
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
  
  delete(i: number) {
    this.userGroups.splice(i, 1);
    this.userGroupService.updateUserGroup(this.userGroups);
  }

  drop(event: CdkDragDrop<UserGroup[]>) {
    moveItemInArray(
      this.userGroups,
      event.previousIndex,
      event.currentIndex
    );
    this.userGroupService.updateUserGroup(this.userGroups);
  }
}
