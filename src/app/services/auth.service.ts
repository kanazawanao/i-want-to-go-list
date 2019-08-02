import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from './../models/user';
import { UserService } from './user.service';
import { Place } from '../models/place';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<User | null | undefined>;
  userId = '';
  places?: Observable<Place[] | null>;
  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private afStore: AngularFirestore,
    private userService: UserService
  ) {
    this.user = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afStore.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

  siginUp(email: string, password: string) {
    return this.afAuth.auth
      .createUserWithEmailAndPassword(email, password)
      .then(credential => {
        this.userId = credential.user ? credential.user.uid : '';
        return this.userService.addUser(this.createUser(credential.user));
      })
      .catch(err => console.log(err));
  }

  login(email: string, password: string): Promise<any> {
    return this.afAuth.auth
      .signInWithEmailAndPassword(email, password)
      .then(credential => {
        this.userId = credential.user ? credential.user.uid : '';
        return this.userService.updateUser(this.createUser(credential.user));
      })
      .catch(err => console.log(err));
  }

  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.oAuthLogin(provider);
  }

  logout() {
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/login']);
    });
  }

  private oAuthLogin(provider: firebase.auth.AuthProvider) {
    return this.afAuth.auth
      .signInWithPopup(provider)
      .then(credential => {
        this.userId = credential.user ? credential.user.uid : '';
        return this.userService.updateUser(this.createUser(credential.user));
      })
      .catch(err => console.log(err));
  }

  private createUser(crediential: firebase.auth.UserCredential | any) {
    const user = new User();
    if (crediential) {
      user.uid = crediential.uid ? crediential.uid : '';
      user.email = crediential.email ? crediential.email : '';
      user.displayName = crediential.displayName ? crediential.displayName : '';
      user.photoURL = crediential.photoURL ? crediential.photoURL : '';
    }
    return user;
  }
}
