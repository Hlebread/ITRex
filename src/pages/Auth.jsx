import React, { useEffect, useCallback } from "react";
import { Switch, Route, useHistory } from "react-router";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import RestorePassword from "./RestorePassword";

export default function Auth() {
  const history = useHistory();
  const historyHandle = useCallback(
    () => history.push("/auth/sign-in"),
    [history]
  );

  useEffect(() => {
    historyHandle();
  }, []);

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
    </Switch>
  );
}
