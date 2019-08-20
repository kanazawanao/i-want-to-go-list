import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserGroupService } from 'src/app/services/firestore/user-group.service';
import { Observable, Subscription } from 'rxjs';
import { UserGroup, UserGroups } from 'src/app/models/user-group';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-user-group',
  templateUrl: './user-group.component.html',
  styleUrls: ['./user-group.component.scss']
})
export class UserGroupComponent implements OnInit, OnDestroy {
  groupNameText = '';
  userGroups$?: Observable<UserGroups | undefined>;
  userGroups: UserGroups = new UserGroups();
  subscriptions: Subscription[] = [];
  constructor(private userGroupService: UserGroupService) {}

  ngOnInit() {
    this.userGroups$ = this.userGroupService.getUserGroup();
    this.subscriptions.push(
      this.userGroups$.subscribe(u => {
        this.userGroups = u ? u : new UserGroups();
        console.log(this.userGroups);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  onClick() {
    const userGroup = new UserGroup();
    userGroup.admin = true;
    userGroup.groupName = this.groupNameText;
    this.userGroups.userGroup.push(userGroup);
    this.userGroupService.addUserGroup(this.userGroups);
    this.groupNameText = '';
  }

  delete(i: number) {
    this.userGroups.userGroup.splice(i, 1);
    this.userGroupService.updateUserGroup(this.userGroups);
  }

  drop(event: CdkDragDrop<UserGroup[]>) {
    moveItemInArray(
      this.userGroups.userGroup,
      event.previousIndex,
      event.currentIndex
    );
    this.userGroupService.updateUserGroup(this.userGroups);
  }
}
