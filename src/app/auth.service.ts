import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;

  constructor(private _fbAuth: AngularFireAuth) {
    this.user = _fbAuth.authState;
  }

  register(email: string, password: string) {
    this._fbAuth.auth
    .createUserWithEmailAndPassword(email, password)

    .then(msg => {
      this.printSuccess('Registration' + msg);
    })
    .catch(err => {
      this.printFailure(err);
    });
  }

  login(email: string, password: string) {
    this._fbAuth.auth
    .signInWithEmailAndPassword(email, password)

    .then(msg => {
      this.printSuccess('Login' + msg);
    })
    .catch(err => {
      this.printFailure(err);
    });
  }

  logout() {
    this._fbAuth.auth
    .signOut();
  }

  /* User notification of failure or success */
  printSuccess(operation) {
    alert(operation + ' Successful');
  }

  printFailure(err) {
    console.log('|Error|: ' + err.message);
  }
}
