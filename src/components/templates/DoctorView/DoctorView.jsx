import React from "react";
import CardsList from "../../blocks/CardsList/CardsList";
import AppHeader from "../../common/AppHeader/AppHeader";
import AppWrapper from "../../common/AppWrapper/AppWrapper";
import UiContainer from "../../common/UiContainer/UiContainer";
import SegmentedButton from "../../interface/SegmentedButton/SegmentedButton";
import Toolbar from "../../blocks/Toolbar/Toolbar";
import NoPatients from "./NoPatients/NoPatients";

import "./DoctorView.scss";

export default function DoctorView() {
  return (
    <AppWrapper className="main">
      <AppHeader />

      <UiContainer className="main">
        <SegmentedButton
          options={[
            {
              label: "Patients",
              value: "Patients",
            },
            {
              label: "Resolutions",
              value: "Resolutions",
            },
          ]}
        />
        <Toolbar title="My patients" />
        {/* <NoPatients /> */}
        <CardsList />
      </UiContainer>
    </AppWrapper>
  );
}
