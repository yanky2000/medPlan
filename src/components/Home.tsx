import React from 'react';
import { VisitsListContainer } from './VisitsListContainer';
import { Calendar } from './Calendar/Calendar';

export const Home: React.FC = () => {
  return (
    <>
      <VisitsListContainer />
      <Calendar />
    </>
  );
};
