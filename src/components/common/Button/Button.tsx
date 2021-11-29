import React, { FC } from "react";

import StyledButton from "./Button.style";
import IButton from "./Button.type";

const Button: FC<IButton> = ({
  children,
  iconLeft,
  iconRight,
  option,
  type,
  onClick,
}) => (
  <StyledButton onClick={(e) => onClick?.(e)} option={option} type={type}>
    {iconLeft}
    {children}
    {iconRight}
  </StyledButton>
);

export default Button;
