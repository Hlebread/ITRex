import { Link } from "react-router-dom";
import styled from "styled-components";

import media from "../../../styles/media";

export const StyledTitle = styled.h2`
  width: 100%;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #202225;
  display: flex;
  align-items: stretch;

  ${media.tablet} {
    font-size: 24px;
    line-height: 36px;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 30px;
  margin-right: 12px;

  & > svg {
    color: var(--color-secondary);
  }

  &:hover > svg {
    color: var(--color-primary);
  }
`;
