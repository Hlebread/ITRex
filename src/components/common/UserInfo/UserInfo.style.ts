import styled, { css } from "styled-components";
import media from "../../../styles/media";

const StyledUserInfo = styled.div<{ isHeader: boolean }>`
  div:first-of-type {
    font-weight: 600;
    font-size: 15px;
    line-height: 130%;
    color: #202225;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  div:last-of-type {
    font-weight: 500;
    font-size: 13px;
    line-height: 130%;
    color: #a1abc9;

    & > div {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }

  ${(props) =>
    props.isHeader &&
    css`
      ${media.phone} {
        display: none;
      }
    `}
`;

export default StyledUserInfo;
