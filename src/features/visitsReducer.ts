import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { visits } from '../../fixtures';
import { IVisit, IHashMap } from '../models';
import { IAppThunk } from '../reducers';

export type IInitialState = {} | IHashMap<IVisit>
const initialState: IInitialState = {};

const visitsSlice = createSlice({
  name: 'visits',
  initialState,
  reducers: {
    addVisit: (state, action: PayloadAction<IVisit>): any => {
      const { visitId } = action.payload;
      return (state = { ...state, [visitId]: action.payload });
    },
    fetchVisitsSuccess: (state, action: PayloadAction<IHashMap<IVisit>>) => {
      // const newState: IHashMap<IVisit> = JSON.parse(action.payload);
      // console.log(action.payload)
      state = action.payload;
      return state;
    },
    increment: (state, action) => {
      return state;
    },
    decrement: state => state,
    fetchVisits: state => console.log('fetching')
  },
});

export const { addVisit, fetchVisitsSuccess } = visitsSlice.actions;
export default visitsSlice.reducer;

export const fetchVisits = (): IAppThunk => async dispatch => {
  try {
    const res = await fetch('http://localhost:3000/visits');
    let data = await res.json();
    // console.log('data is ', data)
    dispatch(fetchVisitsSuccess(data.visits));
  } catch {
    console.log('fetch failed!');
  }
};
