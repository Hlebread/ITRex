import styled, { css } from "styled-components";
import media from "../../../styles/media";
import IForm from "./Form.type";

const StyledForm = styled.form<IForm>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${(props) =>
    props.type === "auth" &&
    css`
      margin-top: 4px;
      gap: 24px;

      ${media.tablet} {
        gap: 40px;
        position: relative;
        top: -48px;
      }
    `}
`;

export default StyledForm;
