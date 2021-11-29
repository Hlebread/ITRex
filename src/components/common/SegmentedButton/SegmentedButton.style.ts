import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

export const StyledSegmentedButton = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 12px;
`;

export const StyledLink = styled(NavLink)<{ selected: boolean }>`
  text-decoration: none;

  button {
    width: 120px;
    height: 40px;
    padding: 12px;
    align-items: center;
    justify-content: center;
    ${(props) =>
      !props.selected &&
      css`
        background: #ffffff;
        color: var(--color-primary);
        font-weight: normal;

        &:hover {
          background-color: var(--color-secondary);
          color: #ffffff;
        }
      `}
  }
`;
