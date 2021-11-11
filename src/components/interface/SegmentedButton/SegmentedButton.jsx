import React, { useState } from "react";
import Button from "../Button/Button";
import cl from "./SegmentedButton.module.scss";

export default function SegmentedButton({ options, getValue }) {
  const [state, setState] = useState(options[0].value);
  return (
    <div className={cl.segmentedBtn}>
      {options.map((option, index) => (
        <Button
          mix={[
            cl.segmentedBtn__button,
            state === option.value ? cl.active : "",
          ]}
          key={index}
          disabled={option.disabled}
          onClick={() => {
            setState(option.value);
            getValue?.(option.value);
            option.action?.();
          }}
        >
          {option.label}
        </Button>
      ))}
    </div>
  );
}
