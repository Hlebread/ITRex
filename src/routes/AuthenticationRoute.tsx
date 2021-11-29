import React, { FC } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AuthenticationView from "../components/Auth/AuthenticationView";
import RestorePage from "../components/Auth/components/RestorePassword/RestorePage";
import SignInPage from "../components/Auth/components/SignIn/SignInPage";
import SignUpPage from "../components/Auth/components/SignUp/SignUpPage";

const AuthenticationRoute: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthenticationView />}>
        <Route path="sign-in" element={<SignInPage />} />
        <Route path="sign-up" element={<SignUpPage />} />
        <Route path="restore-password" element={<RestorePage />} />
        <Route path="/" element={<Navigate replace to="sign-in" />} />
      </Route>
    </Routes>
  );
};

export default AuthenticationRoute;
