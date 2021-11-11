import React, { useState } from "react";
import cl from "./User.module.scss";
import ClassMixer from "../../../utils/ClassMixer";

export default function User({ children, mix }) {
  return (
    <div className={ClassMixer(cl.user, ...(Array.isArray(mix) ? mix : [mix]))}>
      {children}
    </div>
  );
}
