import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { visits } from '../../fixtures';
import { VisitsListContainer } from './VisitsListContainer';
import { NewEventForm } from './NewVisitForm';
import Home from './Home';

export const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={LoginForm} />
            </Switch>
        </BrowserRouter>
    );
};
