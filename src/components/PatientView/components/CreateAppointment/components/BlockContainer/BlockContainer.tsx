import React, { FC } from "react";

import { StyledBlockContainer, StyledBlockTitle } from "./BlockContainer.style";
import IBlockContainer from "./BlockContainer.type";

const BlockContainer: FC<IBlockContainer> = ({ numLabel, title, children }) => (
  <StyledBlockContainer>
    <StyledBlockTitle>
      <div>{numLabel}</div>
      {title}
    </StyledBlockTitle>
    {children}
  </StyledBlockContainer>
);

export default BlockContainer;
