import styled, { css } from "styled-components";
import media from "../../../styles/media";

const StyledUiContainer = styled.div<{ type: string }>`
  position: relative;
  overflow: hidden;
  background: #f9faff;
  grid-area: container;
  padding: 32px;
  overflow: hidden;

  ${media.phone} {
    border-radius: 24px 24px 0px 0px;
  }

  ${(props) =>
    props.type === "auth" &&
    css`
      ${media.tablet} {
        padding: 96px;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
    `}

  ${(props) =>
    props.type === "main" &&
    css`
      display: flex;
      flex-direction: column;
      padding: 24px;

      ${media.tablet} {
        border-radius: 16px;
        padding: 40px 48px;
      }
    `}
`;

export default StyledUiContainer;
