import { ReactChild, ReactElement, ReactNode } from "react";

interface IButton {
  iconLeft?: ReactNode;
  iconRight?: ReactChild | ReactElement;
  onClick?: (e: any) => void;
  option?: string;
  type?: "button" | "submit" | "reset" | undefined;
}

export default IButton;
