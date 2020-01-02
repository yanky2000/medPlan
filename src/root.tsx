import * as React from 'react';

import { App } from './components/app';
import { Provider } from 'react-redux';
// import { store } from './store';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducers';

const store = configureStore({
  reducer: rootReducer,
})


export const Root = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
