import { combineReducers } from 'redux';
import { Action } from '@reduxjs/toolkit';
import visitsReducer from '../features/visitsReducer';
import doctorsReducer from '../features/doctorReducer';
import userReducer from '../features/userReducer';
import clinicsReducer from '../features/clinicsReducer';
import { ThunkAction } from 'redux-thunk';

export const rootReducer = combineReducers({
  visits: visitsReducer,
  user: userReducer, 
  doctors: doctorsReducer,
  clinics: clinicsReducer
});

export type IAppThunk = ThunkAction<void, IRootState, null, Action<string>>;
export type IRootState = ReturnType<typeof rootReducer>;
