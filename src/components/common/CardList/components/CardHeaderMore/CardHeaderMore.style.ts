import styled, { css } from "styled-components";

const StyledCardHeaderMore = styled.div<{
  active: boolean;
  onClick: () => void;
}>`
  flex: 0 0 40px;
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  cursor: pointer;

  ${(props) =>
    props.active &&
    css`
      background: #f9faff;
      border-radius: 6px;

      svg {
        path {
          stroke: #7297ff;
        }
      }
    `}
`;

export default StyledCardHeaderMore;
