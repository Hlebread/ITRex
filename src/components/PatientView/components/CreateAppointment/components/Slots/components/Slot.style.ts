import styled, { css } from "styled-components";
import ISlot from "./Slot.type";

const StyledSlot = styled.div<ISlot>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 104px;
  height: 40px;
  background: #ffffff;
  box-shadow: 0px 4px 32px rgba(218, 228, 255, 0.24);
  border-radius: 8px;
  font-weight: 600;
  font-size: 15px;
  line-height: 130%;
  cursor: pointer;

  ${(props) =>
    props.isDisabled &&
    css`
      background: #dce0ec;
      color: #f9faff;
      cursor: not-allowed;
    `}
`;

export default StyledSlot;
