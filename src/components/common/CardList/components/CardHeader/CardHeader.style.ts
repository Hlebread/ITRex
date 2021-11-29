import styled from "styled-components";
import media from "../../../../../styles/media";

const StyledCardHeader = styled.div`
  position: relative;
  padding: 24px;
  border-bottom: 1px solid #dce0ec;
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;

  ${media.tablet} {
    padding: 24px 32px;
  }
`;

export default StyledCardHeader;
