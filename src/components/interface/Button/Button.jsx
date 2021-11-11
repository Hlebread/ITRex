import React from "react";
import Icon from "../../common/Icon/Icon";
import ClassMixer from "../../../utils/ClassMixer";
import cl from "./Button.module.scss";

export default function Button({ children, withBtn, icon, mix, ...props }) {
  return (
    <button
      className={ClassMixer(cl.button, ...(Array.isArray(mix) ? mix : [mix]))}
      {...props}
    >
      {children}
      {withBtn ? (
        <Icon name={icon || "arrowRight"} className={cl.button__icon} />
      ) : (
        ""
      )}
    </button>
  );
}
