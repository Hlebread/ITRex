import React, { FC } from "react";
import { IoTimeOutline } from "react-icons/io5";

import ICardInfo from "./CardInfo.type";
import StyledCardInfo from "./CardInfo.style";

const CardInfo: FC<ICardInfo> = ({ data, infoIcon }) => (
  <StyledCardInfo>
    <div>
      <div>
        <IoTimeOutline />
      </div>
      <div>{`${data.date.toDateString()} ${data.date.toLocaleTimeString(
        "en-US"
      )}`}</div>
    </div>

    <div>
      <div>{infoIcon}</div>
      <div>{data.text}</div>
    </div>
  </StyledCardInfo>
);

export default CardInfo;
