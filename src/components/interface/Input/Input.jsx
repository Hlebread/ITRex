import React, { useState } from "react";
import Icon from "../../common/Icon/Icon";
import "./Input.scss";
import InputEntryField from "./InputEntryField";
import InputInvalidMessage from "./InputInvalidMessage";

export default function Input({
  name = "text",
  placeholder = "Type text...",
  isInvalid,
  invalidMessage,
  inputValues,
  setInputValues,
  iconLeft,
  iconRight,
  getState,
}) {
  const [isActive, setIsActive] = useState(false);

  const rightIconClickHandler = () => {
    setIsActive(!isActive);
    getState?.(isActive);
  };

  return (
    <div className={`input ${isInvalid ? "input_invalid" : ""}`}>
      <label className="input__container">
        <Icon name={iconLeft} className="input__container__icon" />

        <InputEntryField
          name={name}
          inputValues={inputValues}
          setInputValues={setInputValues}
          placeholder={placeholder}
          isActive={isActive}
          className={`input__container__input input__container__input_${name}`}
        />

        <Icon
          name={isActive ? `${iconRight}_active` : iconRight}
          className="input__container__icon input__container__icon_right"
          clickAction={rightIconClickHandler}
        />
      </label>

      {invalidMessage ? <InputInvalidMessage message={invalidMessage} /> : ""}
    </div>
  );
}
