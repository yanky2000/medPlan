import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { NewEventForm } from './NewVisitForm';
import Home from './Home';
import LoginForm from './LoginForm';
import { VisitsListContainer } from './VisitsListContainer';

export const App = () => {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/newEvent">Add new Event</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/" component={VisitsListContainer} /> */}
        {/* <Route exact path="/login" component={LoginForm} />
        <Route exact path="/newEvent" component={NewEventForm} /> */}
      </Switch>
    </BrowserRouter>
  );
};
