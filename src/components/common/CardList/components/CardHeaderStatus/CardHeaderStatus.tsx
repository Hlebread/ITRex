import React, { FC } from "react";
import StyledCardHeaderStatus from "./CardHeaderStatus.style";

interface ICardHeaderStatus {
  data: {
    status: boolean;
    text: string;
  };
}

const CardHeaderStatus: FC<ICardHeaderStatus> = ({ data }) => (
  <StyledCardHeaderStatus>
    {data.status ? <div /> : ""}
    {data.text}
  </StyledCardHeaderStatus>
);

export default CardHeaderStatus;
