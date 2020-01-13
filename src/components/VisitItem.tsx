import React from "react";
import { IUid, IVisit } from "../models";
import { useSelector, useDispatch } from "react-redux";
import { IRootState } from "../reducers";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { deleteVisit } from "../features/visitsReducer";
import IconButton from "@material-ui/core/IconButton";

export const VisitItem: React.FC<{ visit: IVisit }> = ({ visit }) => {
  const { uid, title, date, clinic, doctor } = visit;

  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteVisit(uid));
  };

  return (
    <Card key={uid}>
      <CardContent>
        <ul>
          <li>{title}</li>
          <p>Date: {date}</p>
          {/* <p>Doctor: {doctor.firstName}</p> */}
          {/* <p>Clinic: {clinic.title}</p> */}
          {/* <p>Location: {location}</p> */}
          {/* <label htmlFor="file">File</label>
          <input type="file" name="file" id="file"/> */}
          <IconButton aria-label="delete" onClick={handleDelete} size="small">
            <DeleteIcon fontSize="small" />
          </IconButton>
          {/* <Button
            variant="contained"
            color="secondary"
            // className={classes.button}
            startIcon={<DeleteIcon />}
            onClick={handleDelete}
            size="small"
          >
            Delete
          </Button> */}
        </ul>
      </CardContent>
    </Card>
  );
};
