import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IHashMap, IUid, IClinic } from "../models";
import { IAppThunk } from "../reducers";
import axios from "axios";

const initialState: IHashMap<IClinic> | null = null;

const clinicsSlice = createSlice({
  name: "doctor",
  initialState,
  reducers: {
    addClinic: (clinicStateSlice, action: PayloadAction<IClinic>) => {
      const newClinic = action.payload;
      clinicStateSlice[newClinic.uid] = newClinic;
      return clinicStateSlice;
    },
    deleteClinic: (state, action: PayloadAction<IUid>) => {
      console.log("deleteing", action.payload);
      delete state[action.payload];
      return state;
    },
    fetchClinicsListSuccess: (
      clinicStateSlice,
      action: PayloadAction<IHashMap<IClinic>>
    ) => {
      // TODO: How to handle sw and data sync? merge dbs?
      clinicStateSlice = action.payload;
      return clinicStateSlice;
    }
  }
});

// MiddleWares
export const fetchClinics = (): IAppThunk => async dispatch => {
  try {
    // TODO: need type for response
    const req = await axios.get("http://localhost:3000/clinics");
    console.log("clinics list fetched!", req);
    dispatch(fetchClinicsListSuccess(req.data));
  } catch {
    console.log("fetching new user from server failed");
  }
};

export const postNewClinic = (
  newClionic: IClinic
): IAppThunk => async dispatch => {
  try {
    // TODO: need type for response
    const req = await axios.post("http://localhost:3000/addclinic", newClionic);
    dispatch(addClinic(req.data));
  } catch {
    console.log("posting new clinic on server failed");
  }
};

export const {
  addClinic,
  deleteClinic,
  fetchClinicsListSuccess
} = clinicsSlice.actions;
export default clinicsSlice.reducer;
