import React from 'react';

import { App } from './components/app';
import { Header } from './components/Header';

export const Root = () => {
  return (
    <div>
      <Header title="Hello from Title (title)" />
      <App />
    </div>
  );
};
