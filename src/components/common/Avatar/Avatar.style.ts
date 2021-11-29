import styled from "styled-components";

const StyledAvatar = styled.header`
  display: flex;
  align-items: center;
  position: relative;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
  }

  div {
    width: 8px;
    height: 8px;
    background: #34c197;
    border-radius: 50%;
    box-shadow: 0 0 0 3px #e3ebff;
    position: absolute;
    top: 0;
    right: 0;
  }
`;

export default StyledAvatar;
