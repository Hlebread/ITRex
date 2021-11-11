import React from "react";
import cl from "./InfoBlock.module.scss";
import ClassMixer from "../../../utils/ClassMixer";

export default function InfoBlock({ children, mix, ...props }) {
  return (
    <p
      className={ClassMixer(
        cl.infoBlock,
        ...(Array.isArray(mix) ? mix : [mix])
      )}
    >
      {children}
    </p>
  );
}
