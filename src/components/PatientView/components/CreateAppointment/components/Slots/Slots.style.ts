import styled from "styled-components";
import media from "../../../../../../styles/media";

const StyledSlotsContainer = styled.div`
  display: flex;
  gap: 16px;

  ${media.phone} {
    overflow-x: auto;
    padding-bottom: 8px;
  }

  ${media.tablet} {
    flex-wrap: wrap;
  }
`;

export default StyledSlotsContainer;
