import { INoId } from "./../../types/models";
import { convertArrToObj } from "../../utils/utils";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IHashMap, IUid, IClinic } from "../../types/models";
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
      action: PayloadAction<IClinic[]>
    ) => {
      // TODO: How to handle sw and data sync? merge dbs?
      const clinics = convertArrToObj(action.payload);
      clinicStateSlice = clinics;
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
  newClinic: INoId<IClinic>
): IAppThunk => async dispatch => {
  try {
    // TODO: need type for response
    const req = await axios.post("http://localhost:3000/addclinic", newClinic);
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
