import React from "react";
import ClassMixer from "../../../utils/ClassMixer";
import cl from "./User.module.scss";

export default function Status({ state, mix }) {
  return (
    <div
      className={ClassMixer(
        `${cl.status} ${cl["status_" + state] || ""}`,
        ...(Array.isArray(mix) ? mix : [mix])
      )}
    ></div>
  );
}
