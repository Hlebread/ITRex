import React, { FC } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AuthenticationRoute from "./AuthenticationRoute";
import MainRoute from "./MainRoute";

const AppRouter: FC = () => (
  <Routes>
    <Route path="/auth/*" element={<AuthenticationRoute />} />
    <Route path="/doctor/*" element={<MainRoute />} />
    <Route path="/patient/*" element={<MainRoute />} />
    <Route path="/" element={<Navigate replace to="auth" />} />
  </Routes>
);

export default AppRouter;
