import * as React from 'react'; import { useParams } from 'react-router';
import { incrementNew } from '../store';

export const VisitDetails = (
//   {
//   title,
//   doctor,
//   date,
//   location,
//   requirements,
// }
) => {
const {visitId} = useParams()
console.log(visitId)
  return (
    <div>
      {/* <h1>{title}</h1>
      <p>Date: {date}</p>
      <p>Location: {location}</p>
      <p>Doctor: {doctor}</p>
      <p>Reqs: {requirements}</p> */}
    </div>
  );
};
