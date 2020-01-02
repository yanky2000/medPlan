import {
  createAction,
  configureStore,
  createReducer,
  createSlice,
} from '@reduxjs/toolkit';
import { visits } from '../../fixtures';

// Original approach: write the action type and action creator by hand
const INCREMENT = 'INCREMENT';
function incrementOriginal() {
  return { type: INCREMENT };
}
// console.log(incrementOriginal());
// {type: "INCREMENT"}
// Or, use `createAction` to generate the action creator:
const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: (state, action) => {
      console.log(action);
      //  state + action.id,
      return state;
    },
    decrement: state => state - 1,
  },
});

const visitsSlice = createSlice({
  name: 'visits',
  initialState: visits,
  reducers: {
    addVisit: (state, action) => console.log(state, action),
    increment: (state, action) => {
      console.log(action);
      //  state + action.id,
      return state;
    },
    decrement: state => state,
  },
});

export const {addVisit} = visitsSlice.actions
export default visitsSlice.reducer;

