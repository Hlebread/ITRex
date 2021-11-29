import { ReactChild, ReactElement } from "react";

interface IInput {
  type: string;
  id: string;
  placeholder?: string;
  iconLeft?: ReactChild | ReactElement;
  iconRight?: ReactChild | ReactElement;
  iconRightClickAction?: () => void;
  invalidMessage?: string;
  value?: string | number;
  onChange?: (value: any) => void;
}

export default IInput;
