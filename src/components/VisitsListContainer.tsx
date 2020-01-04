import React, { useEffect, useState } from 'react';
import { IVisit } from '../models';
import { useDispatch, useSelector } from 'react-redux';
import './styles.css';
import { Link } from 'react-router-dom';
import { IRootState } from '../reducers';
import { fetchVisits } from '../features/visitsReducer';
import { NewEventForm } from './NewVisitForm';
import { VisitItem } from './VisitItem';
import Typography from '@material-ui/core/Typography';

export const VisitsListContainer: React.FC = props => {
  const [isFormVisible, setIsFormVisible] = useState(true);

  useEffect(() => {
    dispatch(fetchVisits());
  }, []);

  const dispatch = useDispatch();
  const { visits } = useSelector((state: IRootState) => state);
  const upComingVisits = Object.values(visits).map(
    ({ visitId, title, date, clinic }) => {
      return <VisitItem visitId={visitId} key={visitId} />;
    }
  );

  const toggleFormVisibility = () => setIsFormVisible(!isFormVisible);

  return (
    <div>
      <Typography component="h1" variant="h5">
        Visits
      </Typography>
      <ul>{upComingVisits}</ul>
      <button onClick={toggleFormVisibility}>
        {isFormVisible ? 'Close form' : 'Add Event'}
      </button>
      {isFormVisible && <NewEventForm />}
    </div>
  );
};
