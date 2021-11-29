import styled from "styled-components";
import media from "../../../../../styles/media";

const StyledCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 23px;
  padding: 24px;

  ${media.tablet} {
    padding: 24px 32px 40px;
  }

  & > div {
    display: flex;
    gap: 18px;

    &:first-of-type {
      font-weight: 600;
      font-size: 15px;
      line-height: 130%;
    }

    &:last-of-type {
      font-size: 15px;
      line-height: 140%;
    }

    div {
      display: flex;
      justify-content: center;

      svg {
        height: 20px;
        width: 20px;
        color: var(--color-secondary);
      }
    }
  }
`;

export default StyledCardInfo;
