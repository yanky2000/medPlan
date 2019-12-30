import * as React from 'react';

export const VisitDetails = ({
  title,
  doctor,
  date,
  location,
  requirements,
}) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>Date: {date}</p>
      <p>Location: {location}</p>
      <p>Doctor: {doctor}</p>
      <p>Reqs: {requirements}</p>
    </div>
  );
};
