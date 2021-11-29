import styled from "styled-components";
import media from "../../../../styles/media";

const StyledNoPatients = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;

  ${media.phone} {
    gap: 32px;
  }

  p {
    text-align: center;
  }
`;

export default StyledNoPatients;
