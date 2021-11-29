import styled, { css } from "styled-components";
import media from "../../../../../../styles/media";

export const StyledBreadcrumbs = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  color: var(--color-primary);
  font-size: 15px;
  line-height: 140%;

  ${media.tablet} {
    font-size: 17px;
    line-height: 24px;
  }
`;

export const StyledCrumb = styled.div<{ active?: boolean }>`
  display: flex;
  align-items: center;
  gap: 16px;

  ${(props) =>
    !props.active &&
    css`
      cursor: pointer;
      transition: 0.2s;

      &:hover {
        color: var(--color-primary-dark);
      }
    `}

  ${(props) =>
    props.active &&
    css`
      color: var(--color-secondary);
    `}
`;
