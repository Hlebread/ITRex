import React, { FC } from "react";

import StyledUserInfo from "./UserInfo.style";
import IUserInfo from "./UserInfo.type";

const UserInfo: FC<IUserInfo> = ({
  topText,
  bottomText,
  isHeader = false,
  children,
}) => (
  <StyledUserInfo isHeader={isHeader}>
    <div>{topText}</div>
    {children || <div>{bottomText}</div>}
  </StyledUserInfo>
);

export default UserInfo;
