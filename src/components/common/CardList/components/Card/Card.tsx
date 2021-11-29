import { FC } from "react";

import ICardData from "./Card.type";

import CardHeader from "../CardHeader/CardHeader";
import CardInfo from "../CardInfo/CardInfo";
import StyledCard from "./Card.style";

const Card: FC<ICardData> = ({ data, infoIcon }) => (
  <StyledCard>
    <CardHeader data={{ name: data.name, details: data.details }} />
    <CardInfo data={{ date: data.date, text: data.text }} infoIcon={infoIcon} />
  </StyledCard>
);

export default Card;
