import React, { FC } from "react";
import { useGetAuthUsertype } from "../store/selectors/auth";
import DoctorRoute from "./DoctorRoute";
import PatientRoute from "./PatientRoute";

const MainRoute: FC = () => {
  const usertype = useGetAuthUsertype();

  if (usertype === "doctor") return <DoctorRoute />;
  if (usertype === "patient") return <PatientRoute />;

  return null;
};

export default MainRoute;
