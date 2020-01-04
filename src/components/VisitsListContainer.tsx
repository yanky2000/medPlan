import React, { useEffect, useState } from 'react';
import { IVisit } from '../models';
import { useDispatch, useSelector } from 'react-redux';
import './VisitListContainer.css';
import { Link } from 'react-router-dom';
import { IRootState } from '../reducers';
import { fetchVisits } from '../features/visitsReducer';
import { NewEventForm } from './NewVisitForm';

export const VisitsListContainer: React.FC = props => {
  const [isFormVisible, setIsFormVisible] = useState(true);

  useEffect(() => {
    dispatch(fetchVisits());
  }, []);

  const dispatch = useDispatch();
  const { visits } = useSelector((state: IRootState) => state);
  const upComingVisits = Object.values(visits).map(
    ({ visitId, title, date, clinic }) => {
      return (
        <div className="visit-container" key={visitId}>
          <Link to={`/visits/${visitId}`}>
            <div>Title: {title}</div>
          </Link>
          <div>Date: {date}</div>
          <div>Clinic: {clinic.title}</div>
        </div>
      );
    }
  );

  const toggleFormVisibility = () => setIsFormVisible(!isFormVisible);

  return (
    <div>
      <h1>Visits</h1>
      <ul>{upComingVisits}</ul>
      <button onClick={toggleFormVisibility}>
        {isFormVisible ? 'Close form' : 'Add Event'}
      </button>
      {isFormVisible && <NewEventForm />}
    </div>
  );
};
