import { ReactElement } from "react";

export default interface ICardInfo {
  data: {
    date: Date;
    text: string;
  };
  infoIcon: ReactElement;
}
