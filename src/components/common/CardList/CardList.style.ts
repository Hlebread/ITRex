import styled from "styled-components";
import media from "../../../styles/media";

const StyledCardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 24px;
  flex-grow: 1;
  list-style: none;
  scrollbar-width: thin;
  overflow-y: auto;
  margin-top: 16px;
  padding-right: 15px;

  &::-webkit-scrollbar {
    width: 12px;
    background-color: #dce0ec;
    border-radius: 5px;
    height: 200px;
  }

  &::-webkit-scrollbar-thumb {
    background: #c3c7d3;
    border-radius: 5px;
  }

  ${media.tablet} {
    margin-top: 42px;
  }

  ${media.desktop} {
    gap: 20px;
    margin-top: 32px;
  }
`;

export default StyledCardList;
