import React, { FC } from "react";

import ISlot from "./Slot.type";
import StyledSlot from "./Slot.style";

const Slot: FC<ISlot> = ({ isDisabled, children }) => (
  <StyledSlot isDisabled={isDisabled}>{children}</StyledSlot>
);

export default Slot;
