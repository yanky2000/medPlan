import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postNewVisit } from '../../features/visitsReducer';
import { dumpVisit } from '../../../fixtures';
import { IRootState } from '../../reducers';
import { useForm } from '../useForm';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { fetchDoctors } from '../../features/doctorReducer';
import { fetchClinics } from '../../features/clinicsReducer';
import './newVisitForm.css';

export const NewEventForm = () => {
  const { values, changeHandler } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const doctors = useSelector((state: IRootState) => state.doctors);
  const clinics = useSelector((state: IRootState) => state.clinics);
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
      const { firstName, lastName, specialization } = doctor;
      return `${firstName} ${lastName} - ${specialization}`;
    });

  const clinicsList =
    clinics &&
    Object.values(clinics).map(clinic => {
      const {
        title,
        contacts: {
          address: { street },
        },
      } = clinic;
      return `${title}  - ${street}`;
    });

  const clickHandler = e => {
    e.preventDefault();
    const newVisit = { ...dumpVisit, ...values };
    console.log(values);
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
                  // className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </li>

              {/* TODO: input time separately from date */}
              <li>
                <Autocomplete
                  id="location"
                  freeSolo
                  options={clinicsList}
                  onChange={changeHandler}
                  renderInput={params => (
                    <TextField
                      {...params}
                      label="Location"
                      margin="normal"
                      variant="outlined"
                      name="location"
                      required
                      fullWidth
                    />
                  )}
                />
              </li>
              <li>
                <Autocomplete
                  id="doctor"
                  freeSolo
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
            <Button variant="contained" color="primary" onClick={clickHandler}>
              Save
            </Button>
          </form>
        </div>
      )}
    </>
  );
};
