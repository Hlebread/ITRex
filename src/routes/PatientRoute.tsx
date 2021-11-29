import React, { FC } from "react";
import { Route, Navigate, Routes } from "react-router-dom";

import PatientView from "../components/PatientView/PatientView";
import Resolutions from "../components/PatientView/components/Resolutions/Resolutions";
import Appointments from "../components/PatientView/components/Appointments/Appointments";
import Profile from "../components/PatientView/components/Profile/Profile";
import CreateAppointment from "../components/PatientView/components/CreateAppointment/CreateAppointment";

const PatientRoute: FC = () => (
  <Routes>
    <Route path="/" element={<PatientView />}>
      <Route path="appointments" element={<Appointments />} />
      <Route path="resolutions" element={<Resolutions />} />
      <Route path="profile" element={<Profile />} />
      <Route path="/" element={<Navigate replace to="appointments" />} />
    </Route>
    <Route path="/make-appointment" element={<CreateAppointment />}></Route>
  </Routes>
);

export default PatientRoute;
