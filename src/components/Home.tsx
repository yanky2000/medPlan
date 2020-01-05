import * as React from 'react';
import { VisitsListContainer } from './VisitsListContainer';
import { Calendar } from './Calendar/Calendar';
export const Home =()  => {
  return (
    <>
      <VisitsListContainer />
      <Calendar />
    </>
  );
}
