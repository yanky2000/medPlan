import * as React from 'react';
import { VisitsListContainer } from './VisitsListContainer';
import { visits } from '../../fixtures';

export default function Home() {
  return (
        <VisitsListContainer visits={Object.values(visits)} />
  );
}
