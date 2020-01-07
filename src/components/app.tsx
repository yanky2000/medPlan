import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import LoginForm from './LoginForm';
import { VisitDetails } from './VisitDetails';
// import { store, counterSlice } from '../store';
import { NewEventForm } from './newVisitForm/NewVisitForm';
import { NavList } from './Nav';
import { SimpleMenu } from './Menu';
import { Profile } from './Profile';
import { Header } from './Header';
import { RegisterForm } from './RegisterForm';

export const App = () => {
  // const clickHandler = () =>
  //   store.dispatch(counterSlice.actions.increment({ id: 11 }));
  return (
    <>
    <Header />
    <BrowserRouter>
      <SimpleMenu />
      {/* <NavList /> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/visits/:visitId" component={VisitDetails} />
        <Route exact path="/newEvent" component={NewEventForm} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/register" component={RegisterForm} />
      </Switch>
    </BrowserRouter>
    </>
  );
};
