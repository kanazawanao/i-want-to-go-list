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
  [fromReducer.reducerFeatureKey]: fromReducer.State;
}

export const reducers: ActionReducerMap<State> = {
  [fromReducer.reducerFeatureKey]: fromReducer.reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
