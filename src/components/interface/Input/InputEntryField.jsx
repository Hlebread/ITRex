import React from "react";

export default function InputEntryField({
  name,
  inputValues,
  setInputValues,
  placeholder,
  isActive,
  className,
}) {
  return (
    <>
      <input
        id={`${name}-input`}
        type={
          name === "password" || name === "password-check"
            ? isActive
              ? "text"
              : "password"
            : "text"
        }
        value={inputValues?.[name]}
        className={className}
        placeholder={`${placeholder}`}
        onChange={(e) =>
          setInputValues?.({
            ...inputValues,
            [name]: e.target.value,
          })
        }
      />
      <label htmlFor={`${name}-input`}>{placeholder}</label>
    </>
  );
}
