import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postNewVisit } from "../../store/reducers/visitsReducer";
import { IRootState } from "../../store/reducers";
import { useForm } from "../common/useForm";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { fetchDoctors } from "../../store/reducers/doctorReducer";
import { fetchClinics } from "../../store/reducers/clinicsReducer";
import "./newVisitForm.css";
import { getIdByFieldContent } from "../../utils/utils";
import { IVisit, INoId } from "../../types/models";

export const NewEventForm = () => {
  const { values, changeHandler } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const doctors = useSelector((state: IRootState) => state.doctors);
  const clinics = useSelector((state: IRootState) => state.clinics);
  const currentUser = useSelector((state: IRootState) => state.user);

  useEffect(() => {
    if (!doctors) {
      dispatch(fetchDoctors());
    }
    if (!clinics) {
      dispatch(fetchClinics());
    }

    doctors && clinics ? setIsLoading(false) : setIsLoading(true);
  }, [doctors, clinics]);

  const doctorsList =
    doctors &&
    Object.values(doctors).map(doctor => {
      return doctor.fullName;
      // return getFullNameAndSpecialization(doctor)
    });

  const clinicsList =
    clinics &&
    Object.values(clinics).map(clinic => {
      return clinic.title;
      // const {
      //   title,
      //   address: { street }
      // } = clinic;
      // return `${title}  - ${street}`;
    });

  const clickHandler = e => {
    e.preventDefault();
    const clinicId = getIdByFieldContent([
      { title: values.clinic },
      Object.values(clinics)
    ]);
    const doctorId = getIdByFieldContent([
      { fullName: values.doctor },
      Object.values(doctors)
    ]);

    const newVisit: INoId<IVisit> = {
      ...values,
      // user: currentUser["_id"],
      doctor: doctorId,
      clinic: clinicId
    };
    console.log("user adding ", newVisit);
    dispatch(postNewVisit(newVisit));
  };

  return (
    <>
      {isLoading ? (
        <h1>Loading</h1>
      ) : (
        <div>
          <h1>Add New Event</h1>
          <form action="">
            <ul>
              <li>
                <TextField
                  name="title"
                  label="Event Title"
                  id="title"
                  defaultValue={values.title}
                  onChange={changeHandler}
                  // className={classes.textField}
                  // helperText="Some important text"
                  variant="outlined"
                  required
                />
              </li>
              <li>
                <TextField
                  name="date"
                  id="date"
                  label="Date"
                  type="datetime-local"
                  defaultValue="2019-05-24T10:30"
                  variant="outlined"
                  required
                  onChange={changeHandler}
                  // className={classes.textField}
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </li>

              {/* TODO: input time separately from date */}
              <li>
                <Autocomplete
                  id="clinic"
                  // freeSolo
                  options={clinicsList}
                  onChange={changeHandler}
                  renderInput={params => (
                    <TextField
                      {...params}
                      label="Clinic"
                      margin="normal"
                      variant="outlined"
                      name="clinic"
                      required
                      fullWidth
                    />
                  )}
                />
              </li>
              <li>
                <Autocomplete
                  id="doctor"
                  // freeSolo
                  options={doctorsList}
                  onChange={changeHandler}
                  renderInput={params => (
                    <TextField
                      {...params}
                      label="Doctor"
                      margin="normal"
                      variant="outlined"
                      name="doctor"
                      required
                      fullWidth
                    />
                  )}
                />
              </li>
              <li>
                <TextField
                  name="comments"
                  label="Comments"
                  id="comments"
                  // defaultValue={values.title}
                  // className={classes.textField}
                  // helperText="Some important text"
                  variant="outlined"
                  multiline
                  rows="4"
                  onChange={changeHandler}
                />
              </li>
            </ul>
            <Button>Cancel</Button>
            {/* TODO: need validation!  */}
            <Button variant="contained" color="primary" onClick={clickHandler}>
              Save
            </Button>
          </form>
        </div>
      )}
    </>
  );
};
