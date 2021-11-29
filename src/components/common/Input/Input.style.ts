import styled, { css } from "styled-components";
import media from "../../../styles/media";

const StyledInput = styled.div<{ iconLeft: boolean; invalid: boolean }>`
  width: 100%;

  & > label {
    width: 100%;
    height: 40px;
    background: #ffffff;
    //  border: 1px solid #dce0ec;
    border-width: 1px;
    border-style: solid;
    border-color: ${(props) => (props.invalid ? "#ff2567" : "#dce0ec")};
    box-shadow: 0px 4px 32px rgba(218, 228, 255, 0.16);
    border-radius: 8px;
    display: flex;
    align-items: center;
    position: relative;

    ${media.tablet} {
      height: 56px;
    }

    &:focus-within {
      border-color: var(--color-primary);
    }

    label {
      width: 0;
      margin-left: -99999px;
    }

    input {
      height: 40px;
      width: 100%;
      background: none;
      border: none;
      outline: none;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 17px;
      line-height: 140%;
      padding: 0 60px 0 24px;

      ${(props) =>
        props.iconLeft &&
        css`
          padding: 0 44px 0 48px;

          ${media.tablet} {
            padding: 0 60px 0 64px;
          }
        `}

      ${media.phone} {
        font-size: 15px;
      }

      &::placeholder {
        color: var(--color-secondary);
        font-size: 15px;

        @include for-tablet {
          line-height: 24px;
          font-size: 17px;
        }
      }
    }

    & > svg,
    & > span {
      position: absolute;
      left: 18px;
      transition: 0.2s;
      cursor: text;
      color: var(--color-secondary);
      font-size: 1.5rem;

      ${media.tablet} {
        left: 26px;
      }
    }

    span {
      left: unset;
      right: 15.99px;
      cursor: pointer;
      display: flex;
      align-items: center;

      ${media.tablet} {
        right: 24px;
      }

      &:hover {
        color: var(--color-primary);
      }
    }
  }
`;

export default StyledInput;
