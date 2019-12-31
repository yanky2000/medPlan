import * as React from 'react';

import { App } from './components/app';
import { Header } from './components/Header';
import { Provider } from 'react-redux';
import { store } from './store';

export const Root = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
