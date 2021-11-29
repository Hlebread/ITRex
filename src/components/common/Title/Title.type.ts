import { ReactChild, ReactElement, ReactNode } from "react";

interface ITitle {
  btn?: {
    icon: ReactChild | ReactElement | ReactNode;
    link: string;
  };
}

export default ITitle;
