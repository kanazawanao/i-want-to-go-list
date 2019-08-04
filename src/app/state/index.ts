import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromReducer from './user.reducer';

export interface State {
  user: fromReducer.State;
}

export const reducers: ActionReducerMap<State> = {
  user: fromReducer.reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
