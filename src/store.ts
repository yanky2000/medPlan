import {
  createAction,
  configureStore,
  createReducer,
  createSlice,
} from '@reduxjs/toolkit';
// Original approach: write the action type and action creator by hand
const INCREMENT = 'INCREMENT';
function incrementOriginal() {
  return { type: INCREMENT };
}
console.log(incrementOriginal());
// {type: "INCREMENT"}
// Or, use `createAction` to generate the action creator:
export const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: state => state + 1,
    decrement: state => state - 1,
  },
});
export const store = configureStore({
  reducer: counterSlice.reducer,
});
