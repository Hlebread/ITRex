import React, { FC } from "react";
import { Route, Navigate, Routes } from "react-router-dom";

import Patients from "../components/DoctorView/components/Patients/Patients";
import Resolutions from "../components/DoctorView/components/Resolutions/Resolutions";
import DoctorView from "../components/DoctorView/DoctorView";

const DoctorRoute: FC = () => (
  <Routes>
    <Route path="/" element={<DoctorView />}>
      <Route path="patients" element={<Patients />} />
      <Route path="resolutions" element={<Resolutions />} />
      <Route path="/" element={<Navigate replace to="patients" />} />
    </Route>
  </Routes>
);

export default DoctorRoute;
