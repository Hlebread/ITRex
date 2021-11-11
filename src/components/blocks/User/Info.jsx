import React, { useState } from "react";
import cl from "./User.module.scss";
import ClassMixer from "../../../utils/ClassMixer";

export default function Info({ head, details, mix }) {
  return (
    <div className={ClassMixer(cl.info, ...(Array.isArray(mix) ? mix : [mix]))}>
      <div className={cl.info__name}>{head}</div>
      <div className={cl.info__details}>{details}</div>
    </div>
  );
}
