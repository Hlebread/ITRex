import React, { FC } from "react";
import { Outlet } from "react-router";
import SegmentedButton from "../common/SegmentedButton/SegmentedButton";
import MainTemplate from "../templates/MainTemplate";

const PatientView: FC = () => {
  return (
    <MainTemplate>
      <SegmentedButton
        options={[
          { label: "Profile", path: "/patient/profile" },
          { label: "Appointments", path: "/patient/appointments" },
          { label: "Resolutions", path: "/patient/resolutions" },
        ]}
      />
      <Outlet />
    </MainTemplate>
  );
};

export default PatientView;
