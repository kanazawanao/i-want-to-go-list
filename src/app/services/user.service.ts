import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private collection: AngularFirestoreCollection<User>;
  constructor(private afStore: AngularFirestore) {
    this.collection = this.afStore.collection<User>('users');
  }

  addUser(user: User) {
    console.log(user);
    this.collection.doc(user.uid).set(user);
  }

  updateUser(user: User) {
    console.log(user);
    this.collection.doc(user.uid).update(user);
  }
}
