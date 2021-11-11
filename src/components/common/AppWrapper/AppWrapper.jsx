import React from "react";
import "./AppWrapper.scss";

export default function AppWrapper({ children, className }) {
  return (
    <div className={`wrapper ${className ? "wrapper_" + className : ""}`}>
      {children}
    </div>
  );
}
