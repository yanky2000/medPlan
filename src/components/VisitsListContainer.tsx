import React, { useEffect } from 'react';
import { IVisit } from '../models';
import { useDispatch, useSelector } from 'react-redux';
import './VisitListContainer.css';
import { Link } from 'react-router-dom';
import { IRootState } from '../reducers';
import { fetchVisits } from '../features/visitsReducer';

export const VisitsListContainer: React.FC = props => {
  useEffect(() => {
    dispatch(fetchVisits());
  }, []);

  const dispatch = useDispatch();

  const { visits } = useSelector((state: IRootState) => state);

  const upComingVisits = Array.from(
    visits.values(),
    ({ visitId, title, date, clinicId }) => {
      return (
        <div className="visit-container" key={visitId}>
          <Link to={`/visits/${visitId}`}>
            <div>Title: {title}</div>
          </Link>
          <div>Date: {date}</div>
          <div>Clinic Id: {clinicId}</div>
        </div>
      );
    }
  );

  const clickHandler = () => console.log('clicked!');
  return (
    <div>
      <h1>Visits</h1>
      <ul>{upComingVisits}</ul>
      <button onClick={clickHandler}>Add Event</button>
    </div>
  );
};
