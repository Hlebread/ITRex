import styled from "styled-components";
import media from "../../../../styles/media";

const StyledFooter = styled.div`
  width: 100%;
  position: absolute;
  bottom: 48px;
  align-items: center;

  ${media.tablet} {
    display: flex;
    gap: 0 12px;
    bottom: 80px;
  }

  ${media.desktop} {
    bottom: 79px;
  }

  & > div {
    font-size: 15px;
    line-height: 140%;
    display: flex;
    align-items: center;
    color: var(--color-secondary);
    margin-bottom: 1px;

    ${media.tablet} {
      width: 198px;
    }
  }

  a {
    font-weight: 600;
    line-height: 130%;
    padding: 3px 0;

    &:hover {
      color: var(--color-primary-dark);
    }
  }
`;

export default StyledFooter;
