import React, { FC } from "react";

import { IComponentType } from "../../../types/common";
import StyledAppWrapper from "./AppWrapper.style";

const AppWrapper: FC<IComponentType> = ({ children, type }) => (
  <StyledAppWrapper type={type}>{children}</StyledAppWrapper>
);

export default AppWrapper;
