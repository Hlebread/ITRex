import React, { useState } from "react";
import "./ToolbarSelect.scss";
import Icon from "../../common/Icon/Icon";
import InfoBlock from "../../common/InfoBlock/InfoBlock";
import DropList from "../../common/DropList/DropList";

export default function ToolbarSelect({
  label,
  options = [
    { label: "Date", value: "date" },
    { label: "Name", value: "name" },
  ],
}) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(options[0].label);

  const chooseOption = (value) => {
    setValue(value);
    setOpen(false);
  };

  return (
    <div className="toolbar-select" onClick={() => setOpen(!open)}>
      <div className="toolbar-select__title_small">
        <div className="toolbar-select__title_small__icon-container">
          <Icon
            name="settings"
            className="toolbar-select__title_small__icon-container__icon"
          />
        </div>
      </div>
      <div className="toolbar-select__title">
        <InfoBlock>{label}</InfoBlock>
        <div className="toolbar-select__title__content">{value}</div>
        <Icon
          name={`arrow${open ? "Up" : "Down"}`}
          className="toolbar-select__title__icon"
        />
      </div>
      <DropList
        options={options}
        setValue={chooseOption}
        open={open}
        mix="toolbar-select__dropList"
      />
    </div>
  );
}
