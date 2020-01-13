import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./Home";
import { SignIn } from "./SignIn";
import { VisitDetails } from "./VisitDetails";
import { NewEventForm } from "./newVisitForm/NewVisitForm";
import { SimpleMenu } from "./Menu";
import { Profile } from "./Profile";
import { Header } from "./Header";
import { RegisterForm } from "./RegisterForm";
import { DoctorsList } from "./DoctorsList";
import { SignUp } from "./SignUp";

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
          <Route exact path="/home" component={Home} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/visits/:visitId" component={VisitDetails} />
          <Route exact path="/newEvent" component={NewEventForm} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/register" component={RegisterForm} />
          <Route exact path="/doctors" component={DoctorsList} />
        </Switch>
      </BrowserRouter>
    </>
  );
};
