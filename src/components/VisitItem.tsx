import React from 'react';
import { IUid } from '../models';
import { useSelector, useDispatch } from 'react-redux';
import { IRootState } from '../reducers';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { deleteVisit } from '../features/visitsReducer';
import IconButton from '@material-ui/core/IconButton';
export const VisitItem: React.FC<{ visitId: IUid }> = ({ visitId }) => {
  const { title, date, clinic, doctor } = useSelector(
    (state: IRootState) => state.visits[visitId]
  );
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteVisit(visitId));
  };

  return (
    <Card key={visitId}>
      <CardContent>
        <ul>
          <li>{title}</li>
          <p>Date: {date}</p>
          <p>Doctor: {doctor.firstName}</p>
          <p>Clinic: {clinic.title}</p>
          <IconButton aria-label="delete" onClick={handleDelete} size="small">
            <DeleteIcon  fontSize="small"/>
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
