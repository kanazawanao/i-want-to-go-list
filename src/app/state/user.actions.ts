import { Action } from '@ngrx/store';

export enum UserActionTypes {
  UserLogin = '[User] Login Action',
  UserLogout = '[User] ogout Action',
  UserSignup = '[User] Signup Action',
  UserUpdate = '[User] Update Action'
}

export class LoginAction implements Action {
  readonly type = UserActionTypes.UserLogin;
}
export class LogoutAction implements Action {
  readonly type = UserActionTypes.UserLogout;
}
export class SignupAction implements Action {
  readonly type = UserActionTypes.UserSignup;
}
export class UpdateAction implements Action {
  readonly type = UserActionTypes.UserUpdate;
}

export type UserActions =
  | LoginAction
  | LogoutAction
  | SignupAction
  | UpdateAction;
