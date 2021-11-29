import React, { FC, useState } from "react";
import Input from "./Input";
import { RiEyeLine, RiEyeCloseLine } from "react-icons/ri";
import { IoLockClosedOutline } from "react-icons/io5";
import IInput from "./Input.type";

const InputPassword: FC<IInput> = ({
  id,
  placeholder = "Type...",
  iconLeft,
  invalidMessage,
  value,
  onChange,
}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <Input
      id={id}
      placeholder={placeholder}
      iconLeft={iconLeft || <IoLockClosedOutline />}
      iconRight={isActive ? <RiEyeLine /> : <RiEyeCloseLine />}
      iconRightClickAction={() => setIsActive(!isActive)}
      type={isActive ? "text" : "password"}
      invalidMessage={invalidMessage}
      value={value}
      onChange={onChange}
    />
  );
};

export default InputPassword;
