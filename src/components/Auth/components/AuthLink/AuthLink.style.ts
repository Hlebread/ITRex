import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  font-size: 15px;
  display: flex;
  align-items: center;
  text-decoration-line: underline;
  color: var(--color-primary);
`;

export default StyledLink;
