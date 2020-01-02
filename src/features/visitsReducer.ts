import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { visits } from '../../fixtures';
import { IVisit, IHashMap } from '../models';
import { IAppThunk } from '../reducers';
import { string } from 'prop-types';

export type IInitialState = {} | IHashMap<IVisit>
const initialState = new Map<string, IVisit>();

const visitsSlice = createSlice({
  name: 'visits',
  initialState,
  reducers: {
    addVisit: (state, action: PayloadAction<IVisit>): any => {
      const { visitId } = action.payload;
      return (state = { ...state, [visitId]: action.payload });
    },
    fetchVisitsSuccess: (state, action: PayloadAction<IHashMap<IVisit>>) => {
      state = new Map(Object.entries(action.payload));
      return state;
    },
    increment: (state, action) => {
      return state;
    },
    decrement: state => state,
  },
});

export const { addVisit, fetchVisitsSuccess } = visitsSlice.actions;
export default visitsSlice.reducer;

export const fetchVisits = (): IAppThunk => async dispatch => {
  try {
    const res = await fetch('http://localhost:3000/visits');
    const data: IHashMap<IVisit> = await res.json();
    dispatch(fetchVisitsSuccess(data));
  } catch {
    console.log('fetch failed!');
  }
};
