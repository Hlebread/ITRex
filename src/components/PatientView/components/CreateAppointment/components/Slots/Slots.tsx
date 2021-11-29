import React, { FC } from "react";

import Slot from "./components/Slot";
import StyledSlotsContainer from "./Slots.style";

const timeslots = [
  { time: "1:00 PM", available: true },
  { time: "2:00 PM", available: false },
  { time: "3:00 PM", available: true },
  { time: "4:00 PM", available: true },
  { time: "5:00 PM", available: false },
  { time: "6:00 PM", available: true },
];

const Slots: FC = ({}) => {
  const timeArr = new Date().toLocaleTimeString("en-US").split(":");
  const time = `${[timeArr[0], timeArr[1]].join(":")} ${
    timeArr[2].split(" ")[1]
  }`;
  return (
    <StyledSlotsContainer>
      {timeslots.map((timeslot, index) => (
        <Slot key={index} isDisabled={!timeslot.available}>
          {timeslot.time}
        </Slot>
      ))}
    </StyledSlotsContainer>
  );
};

export default Slots;
