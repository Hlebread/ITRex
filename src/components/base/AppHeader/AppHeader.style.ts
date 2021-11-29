import styled from "styled-components";
import media from "../../../styles/media";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  top: 0;
  align-items: center;

  ${media.phone} {
    margin: 0 24px;
  }

  > div:last-of-type {
    display: flex;
    align-items: center;
    gap: 16px;
    cursor: pointer;
    text-align: right;
  }
`;

export default StyledHeader;
