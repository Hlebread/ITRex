import React from "react";
import "./UiContainer.scss";

export default function UiContainer(props) {
  return (
    <div
      className={`ui-container ${
        props.className ? "ui-container_" + props.className : ""
      }`}
    >
      {props.children}
    </div>
  );
}
