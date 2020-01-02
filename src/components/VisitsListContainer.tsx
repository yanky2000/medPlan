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

  const { visits } = useSelector((state: IRootState) => state);
  const data = Object.values(visits);
  const dispatch = useDispatch();

  const upComingVisits = data.map(visit => {
    const { visitId, title, date, clinicId } = visit;
    const clickHandler = () => console.log('clicked!');
    return (
      <div key={Date.now()}>
        <div className="visit-container">
          <Link to={`/visits/${visitId}`} key={visitId}>
            <div>Title: {title}</div>
          </Link>
          <div>Date: {date}</div>
          <div>Clinic Id: {clinicId}</div>
        </div>
        <button onClick={clickHandler}>click</button>
      </div>
    );
  });

  return (
    <div>
      <h1>Visits</h1>
      <ul>{upComingVisits}</ul>
    </div>
  );
};
