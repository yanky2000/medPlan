import React from 'react';
import { VisitsListContainer } from './VisitsListContainer';
import { visits } from '../../fixtures';

export default function Home() {
  return (
    <div>
      <VisitsListContainer visits={visits} />
    </div>
  );
}
