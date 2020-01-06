import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IVisit, IUser, IHashMap, IUid } from '../models';
import { IAppThunk } from '../reducers';
import axios from 'axios';

export type IInitialState = {} | IHashMap<IVisit>;

// const initialState = new Map<string, IVisit>();
const initialState: IUser | {} = {};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<IUser>) => {
      return state;
    },
    deleteUser: (state, action: PayloadAction<IUid>) => {
      console.log('deleteing', action.payload);
      delete state[action.payload];
      return state;
    },
    fetchVisitsSuccess: (state, action: PayloadAction<IHashMap<IVisit>>) => {
      state = action.payload;
      return state;
    },
  },
});

export const {
  addUser,
  fetchVisitsSuccess,
  deleteUser,
} = userSlice.actions;
export default userSlice.reducer;

// MiddleWares
export const fetchUserData = (userId: IUid): IAppThunk => async dispatch => {
  try {
    // TODO: need type for response
    const req = await axios.get('http://localhost:3000/getUserData');
    console.log(req);
    // dispatch(addUser(req.data));
  } catch {
    console.log('fetching new user from server failed');
  }
};

export const registerNewUser = (
  newUser: IUser
): IAppThunk => async dispatch => {
  try {
    // TODO: need type for response
    const req = await axios.post('http://localhost:3000/adduser', newUser);
    // dispatch(addUser(req.data));
  } catch {
    console.log('posting new visit on server failed');
  }
};
