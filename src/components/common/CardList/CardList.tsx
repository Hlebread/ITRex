import React, { FC, ReactElement } from "react";

import listData from "../../../assets/MockData";

import StyledCardList from "./CardList.style";
import Card from "./components/Card/Card";

interface ICardList {
  infoIcon: ReactElement;
}

const CardList: FC<ICardList> = ({ infoIcon }) => {
  return (
    <StyledCardList>
      {listData.map((record, index) => (
        <Card data={record} infoIcon={infoIcon} key={index} />
      ))}
    </StyledCardList>
  );
};

export default CardList;
