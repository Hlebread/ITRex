import styled from "styled-components";
import media from "../../../../../../styles/media";

export const StyledBlockContainer = styled.div``;

export const StyledBlockTitle = styled.h4`
  color: var(--color-secondary);
  font-size: 17px;
  line-height: 24px;
  font-style: normal;
  font-weight: normal;
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;

  ${media.tablet} {
    margin-bottom: 32px;
  }

  div {
    height: 32px;
    flex: 0 0 32px;
    border: 1px solid var(--color-secondary);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
