import styled from "styled-components";
import media from "../../../../../styles/media";

const StyledInvalidMessage = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 120%;
  align-items: center;
  letter-spacing: -0.24px;
  color: #f6657f;
  margin-top: 17px;
  display: flex;

  ${media.tablet} {
    margin-top: 8px;
  }
`;

export default StyledInvalidMessage;
