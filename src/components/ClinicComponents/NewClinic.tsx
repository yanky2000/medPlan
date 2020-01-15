import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../common/useForm";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { postNewClinic } from "../../store/reducers/clinicsReducer";
import { IVisit, INoId, IClinic } from "../../types/models";
import { CITY, STREET, ZIPCODE } from "../../constants";

export const NewClinicForm = () => {
  const { values, changeHandler } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const clickHandler = e => {
    e.preventDefault();

    const newClinic: INoId<IClinic> = {
      ...values,
      address: {
        country: values.country,
        city: values.city,
        street: values.street,
        zipCode: values.zipCode
      },
      contacts: {
        email: values.email,
        phone: values.phone
      }
      // user: currentUser["_id"],
      //   doctor: doctorId,
    };
    console.log("new clinic adding ", newClinic);
    dispatch(postNewClinic(newClinic));
  };

  return (
    <>
      {isLoading ? (
        <h1>Loading</h1>
      ) : (
        <div>
          <h1>Add New Clinic</h1>
          <form action="">
            <ul>
              <li>
                <TextField
                  name="title"
                  label="Clinic title"
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
              <li>
                <TextField
                  // error={errors.email && touched.email}
                  label="phone"
                  name="phone"
                  // className={classes.textField}
                  value={values.phone}
                  onChange={changeHandler}
                  // onBlur={handleBlur}
                  // helperText={(errors.email && touched.email) && errors.email}
                  margin="normal"
                  variant="outlined"
                />
              </li>
              <li>
                <TextField
                  name={CITY}
                  label={CITY}
                  id={CITY}
                  // defaultValue={values.title}
                  // className={classes.textField}
                  // helperText="Some important text"
                  variant="outlined"
                  onChange={changeHandler}
                />
              </li>
              <li>
                <TextField
                  name={STREET}
                  label={STREET}
                  id={STREET}
                  // defaultValue={values.title}
                  // className={classes.textField}
                  // helperText="Some important text"
                  variant="outlined"
                  onChange={changeHandler}
                />
              </li>
              <li>
                <TextField
                  name={ZIPCODE}
                  label={ZIPCODE}
                  id={ZIPCODE}
                  // defaultValue={values.title}
                  // className={classes.textField}
                  // helperText="Some important text"
                  variant="outlined"
                  onChange={changeHandler}
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
