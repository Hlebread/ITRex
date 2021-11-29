import React, { FC } from "react";
import { Outlet } from "react-router";
import SegmentedButton from "../common/SegmentedButton/SegmentedButton";
import MainTemplate from "../templates/MainTemplate";

const DoctorView: FC = () => {
  return (
    <MainTemplate>
      <SegmentedButton
        options={[
          { label: "Patients", path: "/doctor/patients" },
          { label: "Resolutions", path: "/doctor/resolutions" },
        ]}
      />
      <Outlet />
    </MainTemplate>
  );
};

export default DoctorView;
