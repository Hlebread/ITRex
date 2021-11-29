import React, { FC } from "react";

import IToolbar from "./Toolbar.type";

import ToolbarSearch from "./components/ToolbarSearch/ToolbarSearch";
import { StyledToolbar, StyledToolbarTitle } from "./Toolbar.style";

const Toolbar: FC<IToolbar> = ({ title, children }) => (
  <StyledToolbar>
    <StyledToolbarTitle>{title}</StyledToolbarTitle>
    {children}
    <ToolbarSearch />
  </StyledToolbar>
);

export default Toolbar;
