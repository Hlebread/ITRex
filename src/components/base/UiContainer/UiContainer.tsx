import React, { FC } from "react";

import { IComponentType } from "../../../types/common";
import StyledUiContainer from "./UiContainer.style";

const UiContainer: FC<IComponentType> = ({ children, type }) => (
  <StyledUiContainer type={type}>{children}</StyledUiContainer>
);

export default UiContainer;
