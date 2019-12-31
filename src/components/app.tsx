import * as React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Home from './Home';
import LoginForm from './LoginForm';
import { VisitDetails } from './VisitDetails';
import { store, counterSlice } from '../store';

export const App = () => {
  const clickHandler = () => store.dispatch(counterSlice.actions.increment())
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
      <button id='increment' onClick={clickHandler}>Increment</button>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/visits/:visitId" component={VisitDetails} />
      </Switch>
    </BrowserRouter>
  );
};
