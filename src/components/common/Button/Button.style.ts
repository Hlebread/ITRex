import styled, { css } from "styled-components";

import media from "../../../styles/media";
import IButton from "./Button.type";

const StyledButton = styled.button<IButton>`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 14px 16px;
  position: relative;
  min-width: 116px;
  height: 48px;
  background: var(--color-primary);
  border: none;
  border-radius: 8px;
  color: #ffffff;
  font-weight: 600;
  font-size: 15px;
  line-height: 130%;
  cursor: pointer;
  align-self: start;
  text-decoration: none;
  transition: 0.2s;
  text-underline: none;

  ${media.tablet} {
    min-width: 138px;
    height: 56px;
    font-size: 17px;
    padding: 16px 24px;
  }

  &:hover {
    background: var(--color-primary-dark);
  }

  & > svg {
    position: relative;
    left: 10px;
    font-size: 1.3rem;
  }

  ${(props) =>
    props.option === "secondary" &&
    css`
      background: #ffffff;
      color: var(--color-primary);
      font-weight: normal;

      &:hover {
        background-color: var(--color-secondary);
        color: #ffffff;
      }
    `}

  ${(props) =>
    props.option === "toolbar" &&
    css`
      gap: 12px;
		
      & > svg {
        left: 0;
      }
    `}
`;

export default StyledButton;
