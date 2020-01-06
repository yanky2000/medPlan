import { combineReducers } from 'redux';
import { Action } from '@reduxjs/toolkit';
import visitsReducer from '../features/visitsReducer';
import userReducer from '../features/userReducer';
import { ThunkAction } from 'redux-thunk';

export const rootReducer = combineReducers({
  visits: visitsReducer,
  user: userReducer 
});

export type IAppThunk = ThunkAction<void, IRootState, null, Action<string>>;
export type IRootState = ReturnType<typeof rootReducer>;
