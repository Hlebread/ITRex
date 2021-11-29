import React, { FC } from "react";

import IInvalidMessage from "./InvalidMessage.type";
import StyledInvalidMessage from "./InvalidMessage.style";

const InvalidMessage: FC<IInvalidMessage> = ({ message }) => (
  <StyledInvalidMessage>{message}</StyledInvalidMessage>
);

export default InvalidMessage;
