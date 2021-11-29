import styled from "styled-components";
import media from "../../../../../styles/media";

const StyledCard = styled.li`
  flex-basis: 100%;
  border-radius: 12px;
  background: #ffffff;
  overflow: hidden;

  ${media.custom(1300, "min")} {
    flex: 0 1 calc(100% / 4 - 20px);
  }
`;

export default StyledCard;
