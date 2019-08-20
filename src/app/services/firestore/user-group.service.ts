import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import { UserGroup } from 'src/app/models/user-group';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserGroupService {
  private collection: AngularFirestoreCollection<UserGroup>;
  private document: AngularFirestoreDocument<UserGroup>;
  private userId: string;
  constructor(
    private auth: AuthService,
    private afStore: AngularFirestore
    ) {
    this.userId = this.auth.userId;
    this.collection = this.afStore.collection<UserGroup>('user-group');
    this.document = this.afStore.doc<UserGroup>(`categories/${this.userId}`);
  }

  addUserGroup(userGroups: UserGroup[]): void {
    this.collection
      .doc(this.userId)
      .set(Object.assign({}, JSON.parse(JSON.stringify(userGroups))));
  }

  updateUserGroup(userGroups: UserGroup[]): void {
    this.collection
      .doc(this.userId)
      .set(Object.assign({}, JSON.parse(JSON.stringify(userGroups))));
  }

  getUserGroup(): Observable<UserGroup | undefined> {
    return this.document.valueChanges();
  }
}
