import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IVisit, IUser, IHashMap, IUid, IDoctor } from "../models";
import { IAppThunk } from "../reducers";
import axios from "axios";

const initialState: IHashMap<IDoctor> | null = null;

const doctorsSlice = createSlice({
  name: "doctor",
  initialState,
  reducers: {
    addDoctor: (doctorsStateSlice, action: PayloadAction<IDoctor>) => {
      const newDoc = action.payload;
      doctorsStateSlice[newDoc.doctorId] = newDoc;
      return doctorsStateSlice;
    },
    deleteDoctor: (state, action: PayloadAction<IUid>) => {
      console.log("deleteing", action.payload);
      delete state[action.payload];
      return state;
    },
    fetchDoctorsListSuccess: (
      userStateSlice,
      action: PayloadAction<IHashMap<IDoctor>>
    ) => {
      // TODO: How to handle sw and data sync? merge dbs?
      userStateSlice = action.payload;
      return userStateSlice;
    }
  }
});

// MiddleWares
export const fetchDoctors = (): IAppThunk => async dispatch => {
  try {
    // TODO: need type for response
    const req = await axios.get("http://localhost:3000/doctors");
    console.log("docs list fetched!", req);
    dispatch(fetchDoctorsListSuccess(req.data));
  } catch {
    console.log("fetching new user from server failed");
  }
};

export const postNewDoctor = (newDoc: IDoctor): IAppThunk => async dispatch => {
  try {
    // TODO: need type for response
    const req = await axios.post("http://localhost:3000/adddoctor", newDoc);
    dispatch(addDoctor(req.data));
  } catch {
    console.log("posting new visit on server failed");
  }
};

export const {
  addDoctor,
  deleteDoctor,
  fetchDoctorsListSuccess
} = doctorsSlice.actions;
export default doctorsSlice.reducer;
