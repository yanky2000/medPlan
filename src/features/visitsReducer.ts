import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { visits } from '../../fixtures';
import { IVisit, IHashMap, IUid } from '../models';
import { IAppThunk, IRootState } from '../reducers';
import axios from 'axios';

export type IInitialState = {} | IHashMap<IVisit>;

// const initialState = new Map<string, IVisit>();
const initialState: IInitialState = {};

const visitsSlice = createSlice({
  name: 'visits',
  initialState,
  reducers: {
    addVisit: (state, action: PayloadAction<IVisit>) => {
      const { visitId } = action.payload;
      state[visitId] = action.payload;
      return state;
    },
    deleteVisit: (state, action: PayloadAction<IUid>) => {
      console.log('deleteing', action.payload)
      delete state[action.payload];
      return state;
    },
    // getVisit: (state, action: PayloadAction<IUid>) => {
    // // return state.get(action.payload)
    // //     },
    fetchVisitsSuccess: (state, action: PayloadAction<IHashMap<IVisit>>) => {
      state = action.payload;
      return state;
    },
    increment: (state, action) => {
      return state;
    },
    decrement: state => state,
  },
});

export const { addVisit, fetchVisitsSuccess, deleteVisit } = visitsSlice.actions;
export default visitsSlice.reducer;

// MiddleWares
export const fetchVisits = (): IAppThunk => async dispatch => {
  try {
    const res = await fetch('http://localhost:3000/visits');
    const data: IHashMap<IVisit> = await res.json();
    dispatch(fetchVisitsSuccess(data));
  } catch {
    console.log('fetch failed!');
  }
};

export const postNewVisit = (
  newVisit: Partial<IVisit>
): IAppThunk => async dispatch => {
  try {
    // TODO: need type for response
    const req = await axios.post('http://localhost:3000/newvisit', newVisit);
    dispatch(addVisit(req.data));
  } catch {
    console.log('posting new visit on server failed');
  }
};
