import styled from "styled-components";

import { StyledTitle } from "../Title/Title.style";

export const StyledToolbar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  transition: 0.2s;
  position: relative;
  margin-top: 40px;
`;

export const StyledToolbarTitle = styled(StyledTitle)`
  flex: 1 1 50px;
`;
