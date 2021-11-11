import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import DoctorView from "./components/templates/DoctorView/DoctorView";
import PatientView from "./components/templates/PatientView/PatientView";
import RestorePassword from "./pages/RestorePassword";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  const [auth, setAuth] = useState(true);

  return (
    <Switch>
      <Route path="/sign-in">
        <SignIn />
      </Route>
      <Route path="/sign-up">
        <SignUp />
      </Route>
      <Route path="/restore-password">
        <RestorePassword />
      </Route>
      <Route path="/doctor">
        <DoctorView />
      </Route>
      <Route path="/patient">
        <PatientView />
      </Route>
      <Route path="/404">
        <div>404</div>
      </Route>
      <Redirect to={auth ? "/doctor" : "/sign-in"} />
    </Switch>
  );
}

export default App;
