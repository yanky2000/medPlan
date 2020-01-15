import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postNewVisit } from "../../store/reducers/visitsReducer";
import { IRootState } from "../../store/reducers";
import { useForm } from "../common/useForm";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { fetchClinics } from "../../store/reducers/clinicsReducer";
// import "./newVisitForm.css";
import { getIdByFieldContent } from "../../utils/utils";
import { INoId, IDoctor } from "../../types/models";
import { FIRST_NAME, LAST_NAME } from "../../constants";
import { postNewDoctor } from "../../store/reducers/doctorReducer";

export const NewDoctorForm = () => {
  const { values, changeHandler } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const clinics = useSelector((state: IRootState) => state.clinics);

  useEffect(() => {
    if (!clinics) {
      dispatch(fetchClinics());
    }

    clinics ? setIsLoading(false) : setIsLoading(true);
  }, [clinics]);

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

    const newDoctor: INoId<IDoctor> = {
      ...values,
      clinics: [clinicId],
      contacts: { email: values.email, phone: values.phone }

      // user: currentUser["_id"],
    };
    console.log("user adding ", newDoctor);
    dispatch(postNewDoctor(newDoctor));
  };

  return (
    <>
      {isLoading ? (
        <h1>Loading</h1>
      ) : (
        <div>
          <h1>Add New Doctor</h1>
          <form action="">
            <ul>
              <li>
                <TextField
                  name={FIRST_NAME}
                  label="First Name"
                  id={FIRST_NAME}
                  //   defaultValue=
                  onChange={changeHandler}
                  // className={classes.textField}
                  // helperText="Some important text"
                  variant="outlined"
                  required
                />
              </li>
              <li>
                <TextField
                  name={LAST_NAME}
                  label="Last Name"
                  id={LAST_NAME}
                  //   defaultValue=
                  onChange={changeHandler}
                  // className={classes.textField}
                  // helperText="Some important text"
                  variant="outlined"
                  required
                />
              </li>
              <li>
                <TextField
                  name="title"
                  label="Doctor title"
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
                  name="specialization"
                  label="Specialization"
                  id="specialization"
                  defaultValue={values.specialization}
                  onChange={changeHandler}
                  // className={classes.textField}
                  // helperText="Some important text"
                  variant="outlined"
                  required
                />
              </li>
              <li>
                <TextField
                  // error={errors.email && touched.email}
                  label="email"
                  name="email"
                  // className={classes.textField}
                  value={values.email}
                  onChange={changeHandler}
                  // onBlur={handleBlur}
                  // helperText={(errors.email && touched.email) && errors.email}
                  margin="normal"
                  variant="outlined"
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
