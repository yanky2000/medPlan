import * as React from 'react';
import { IVisit } from '../models';
import './VisitListContainer.css';
import { Link } from 'react-router-dom';

interface IProps {
  visits: IVisit[];
}
export const VisitsListContainer: React.FunctionComponent<IProps> = props => {
  const { visits } = props;
  const upComingVisits = visits.map(visit => {
    const { visitId, title, date, clinicId } = visit;
    const clickHandler = () => console.log('clicked!');
    return (
      <>
        <Link to={`/visits/${visitId}`} key={visitId}>
          <div className="visit-container">
            <div>Title: {title}</div>
            <div>Date: {date}</div>
            <div>Clinic Id: {clinicId}</div>
          </div>
        </Link>
        <button onClick={clickHandler}>click</button>
      </>
    );
  });

  return (
    <div>
      <h1>Visits</h1>
      <ul>{upComingVisits}</ul>
      <code>{JSON.stringify(visits)}</code>
    </div>
  );
};
