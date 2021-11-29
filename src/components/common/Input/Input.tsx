import React, { FC } from "react";

import IInput from "./Input.type";

import StyledInput from "./Input.style";
import InvalidMessage from "./components/InvalidMessage/InvalidMessage";

const Input: FC<IInput> = ({
  type,
  id,
  placeholder = "Type...",
  iconLeft,
  iconRight,
  iconRightClickAction,
  invalidMessage,
  value,
  onChange,
}) => (
  <StyledInput iconLeft={!!iconLeft} invalid={!!invalidMessage}>
    <label>
      {iconLeft}

      <input
        type={type}
        placeholder={placeholder}
        id={id}
        value={value}
        onChange={onChange}
      />
      <label htmlFor={`${id}-input`}>{placeholder}</label>

      {iconRight ? (
        <span onClick={() => iconRightClickAction?.()}>{iconRight}</span>
      ) : (
        ""
      )}
    </label>

    {invalidMessage ? <InvalidMessage message={invalidMessage} /> : ""}
  </StyledInput>
);

export default Input;
