import styled from "styled-components";
import media from "../../../../../../styles/media";

const StyledCreateAppointmentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  overflow-y: auto;
  margin-top: 24px;

  ${media.tablet} {
    margin-top: 40px;
  }

  ${media.desktop} {
    flex-direction: row;
  }
`;

export default StyledCreateAppointmentContainer;
