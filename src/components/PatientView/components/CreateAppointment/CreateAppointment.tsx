import React, { FC } from "react";

import MainTemplate from "../../../templates/MainTemplate";
import Toolbar from "../../../common/Toolbar/Toolbar";
import CreateAppointmentContainer from "./components/CreateAppointmentContainer/CreateAppointmentContainer";
import BlockContainer from "./components/BlockContainer/BlockContainer";
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";
import MyCalendar from "./components/Calendar/MyCalendar";
import Slots from "./components/Slots/Slots";

const CreateAppointment: FC = () => (
  <MainTemplate>
    <Breadcrumbs
      crumbs={{
        items: [{ label: "Doctors", path: "/" }],
        active: "Make an appointment",
      }}
    />
    <Toolbar title="Make an appointment" />
    <CreateAppointmentContainer>
      <BlockContainer numLabel={1} title="Choose a day for an appointment">
        <MyCalendar />
      </BlockContainer>
      <BlockContainer numLabel={2} title="Select an available timeslot">
        <Slots></Slots>
      </BlockContainer>
      <BlockContainer
        numLabel={3}
        title="Select a doctor and define the reason of your visit"
      ></BlockContainer>
    </CreateAppointmentContainer>
  </MainTemplate>
);

export default CreateAppointment;
