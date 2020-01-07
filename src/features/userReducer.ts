import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IVisit, IUser, IHashMap, IUid } from '../models';
import { IAppThunk } from '../reducers';
import axios from 'axios';

const initialState: IUser | null = null;

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (userStateSlice, action: PayloadAction<IUser>) => {
      return action.payload;
    },
    deleteUser: (state, action: PayloadAction<IUid>) => {
      console.log('deleteing', action.payload);
      delete state[action.payload];
      return state;
    },
    fetchUserDataSuccess: (userStateSlice, action: PayloadAction<IUser>) => {
     userStateSlice = action.payload;
      return userStateSlice;
    },
  },
});


// MiddleWares
export const fetchUserData = (userId: IUid): IAppThunk => async dispatch => {
  try {
    // TODO: need type for response
    const req = await axios.get('http://localhost:3000/userData');
    console.log('user data fetched!', req);
    dispatch(fetchUserDataSuccess(req.data));
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
    dispatch(addUser(req.data));
  } catch {
    console.log('posting new visit on server failed');
  }
};

export const { addUser, deleteUser, fetchUserDataSuccess } = userSlice.actions;
export default userSlice.reducer;