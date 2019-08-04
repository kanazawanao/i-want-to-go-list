import { Action } from '@ngrx/store';
import { UserActionTypes } from './user.actions';
import { User } from '../models/user';

export const reducerFeatureKey = 'reducer';

export interface State {
  user: User;
}

export const initialState: State = {
  user: new User()
};

export function reducer(state = initialState, action: Action): State {
  switch (action.type) {
    case UserActionTypes.UserLogin:
    case UserActionTypes.UserLogout:
    case UserActionTypes.UserSignup:
    case UserActionTypes.UserUpdate:
    default:
      return state;
  }
}
