import { ReactElement } from "react";

export default interface ICardData {
  data: {
    name: string;
    details: {
      status: boolean;
      text: string;
    };
    date: Date;
    text: string;
  };
  infoIcon: ReactElement;
}
