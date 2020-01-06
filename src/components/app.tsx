import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import LoginForm from './LoginForm';
import { VisitDetails } from './VisitDetails';
// import { store, counterSlice } from '../store';
import { NewEventForm } from './NewVisitForm';
import { NavList } from './Nav';
import { SimpleMenu } from './Menu';

export const App = () => {
  // const clickHandler = () =>
  //   store.dispatch(counterSlice.actions.increment({ id: 11 }));
  return (
    <BrowserRouter>
      <SimpleMenu />
      {/* <NavList /> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/visits/:visitId" component={VisitDetails} />
        <Route exact path="/newEvent" component={NewEventForm} />
        <Route exact path="/profile" component={NewEventForm} />
      </Switch>
    </BrowserRouter>
  );
};
