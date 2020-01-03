import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { IRootState } from '../reducers';

export const VisitDetails = () => {
  const { visitId } = useParams();
  const { title, date, doctorId } = useSelector((state: IRootState) =>
    state.visits.get(visitId)
  );
  return (
    <div>
      <h1>{title}</h1>
      <p>Date: {date}</p>
      {/* <p>Location: {visit.location}</p> */}
      <p>Doctor: {doctorId}</p>
      {/* <p>Reqs: {visit.requirements}</p> */}
    </div>
  );
};
