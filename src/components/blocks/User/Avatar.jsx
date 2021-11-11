import React, { useState } from "react";
import cl from "./User.module.scss";
import Status from "./Status";
import pic from "../../../assets/images/avatar.jpg";

export default function Avatar({ img, withStatus, status }) {
  return (
    <div className={cl.avatar}>
      <img src={pic} alt="Photo" className={cl.avatar__photo} />
      {withStatus ? <Status state={status} /> : ""}
    </div>
  );
}
