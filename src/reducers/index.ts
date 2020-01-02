import { combineReducers } from 'redux';
import { Action } from '@reduxjs/toolkit';
import visitsReducer from '../features/visitsReducer';
import { ThunkAction } from 'redux-thunk';

export const rootReducer = combineReducers({
  visits: visitsReducer,
});

export type IAppThunk = ThunkAction<void, IRootState, null, Action<string>>;
export type IRootState = ReturnType<typeof rootReducer>;
