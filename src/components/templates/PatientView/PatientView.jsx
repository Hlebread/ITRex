import React from "react";
import CardsList from "../../blocks/CardsList/CardsList";
import AppHeader from "../../common/AppHeader/AppHeader";
import AppWrapper from "../../common/AppWrapper/AppWrapper";
import UiContainer from "../../common/UiContainer/UiContainer";
import SegmentedButton from "../../interface/SegmentedButton/SegmentedButton";
import Toolbar from "../../blocks/Toolbar/Toolbar";

import "./PatientView.scss";

export default function PatientView() {
  return (
    <AppWrapper className="main">
      <AppHeader />

      <UiContainer className="main">
        <SegmentedButton
          options={[
            {
              label: "Profile",
              value: "Profile",
            },
            {
              label: "Appointments",
              value: "Appointments",
            },
            {
              label: "Resolutions",
              value: "Resolutions",
            },
          ]}
        />
        <Toolbar title="My Appointments"/>
        <CardsList />
      </UiContainer>
    </AppWrapper>
  );
}
