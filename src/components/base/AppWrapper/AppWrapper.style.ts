import styled, { css } from "styled-components";
import media from "../../../styles/media";

const StyledAppWrapper = styled.div<{ type: string }>`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap");

  width: 100%;
  height: 100vh;
  display: grid;

  ${(props) =>
    props.type === "auth" &&
    css`
      background: black;
      grid-template-rows: 72px 1fr;
      grid-template-columns: 1fr;
      grid-template-areas: "header" "container";

      ${media.tablet} {
        grid-template-rows: 1fr;
        grid-template-columns: 1fr 560px;
        grid-template-areas: "header container";
      }
    `}

  ${(props) =>
    props.type === "main" &&
    css`
      background: #e3ebff;
      grid-template-rows: 80px 1fr;
      grid-template-columns: 1fr;
      grid-template-areas: "header" "container";

      ${media.tablet} {
        padding: 0 64px 48px;
      }
    `}
`;

export default StyledAppWrapper;
