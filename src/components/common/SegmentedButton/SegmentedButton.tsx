import React, { FC } from "react";
import { useLocation } from "react-router-dom";

import Button from "../Button/Button";
import { StyledSegmentedButton, StyledLink } from "./SegmentedButton.style";
import { ISegmentedButton } from "./SegmentedButton.type";

const SegmentedButton: FC<ISegmentedButton> = ({ options }) => {
  const location = useLocation();
  return (
    <StyledSegmentedButton>
      {options.map((o, i) => (
        <StyledLink to={o.path} selected={o.path === location.pathname} key={i}>
          <Button>{o.label}</Button>
        </StyledLink>
      ))}
    </StyledSegmentedButton>
  );
};

export default SegmentedButton;
