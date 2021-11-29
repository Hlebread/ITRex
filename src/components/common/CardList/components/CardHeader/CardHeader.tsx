import React, { FC } from "react";
import Avatar from "../../../Avatar/Avatar";
import UserInfo from "../../../UserInfo/UserInfo";
import CardHeaderMore from "../CardHeaderMore/CardHeaderMore";
import CardHeaderStatus from "../CardHeaderStatus/CardHeaderStatus";
import StyledCardHeader from "./CardHeader.style";

interface ICardHeader {
  data: {
    name: string;
    details: {
      status: boolean;
      text: string;
    };
  };
}

const CardHeader: FC<ICardHeader> = ({ data }) => {
  return (
    <StyledCardHeader>
      <Avatar />
      <UserInfo topText={data.name}>
        <CardHeaderStatus data={data.details} />
      </UserInfo>
      <CardHeaderMore />
    </StyledCardHeader>
  );
};

export default CardHeader;
