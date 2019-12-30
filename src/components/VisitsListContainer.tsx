import * as React from 'react';
import { IVisit } from '../models';
import { Http2ServerRequest } from 'http2';

interface IProps {
  visits: IVisit[]
}
export const VisitsListContainer: React.FunctionComponent<
 IProps
> =  props => {
  const {visits} = props;
  // console.log(Array.isArray(props.visits), props.visits);
  const a = visits.map(a => <div>{a}</div>);
  const upComingVisits =  visits.map(visit => {
    const { visitId, title, date, clinic } = visit;
    return (
      <div key={visitId}>
        <div>Title: {title}</div>
        <div>Date: {date}</div>
        <div>Clinic: {clinic.title}</div>
      </div>
    );
  });

  const arr = [1, 2].map(number => <h1>{number}</h1>);

  return (
    <div>
      <h1> Upcoming Visits</h1>
      {/* <ul>{upComingVisits}</ul> */}
      {/* <div>{arr}</div> */}
      <code>{JSON.stringify(visits)}</code>
    </div>
  );
};
