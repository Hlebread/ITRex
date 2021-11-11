import React from "react";
import { Link } from "react-router-dom";
import Icon from "../Icon/Icon";
import cl from "./Title.module.scss";
import ClassMixer from "../../../utils/ClassMixer";

export default function Title({ withBtn, link, children, mix }) {
  return (
    <h2 className={ClassMixer(cl.title, ...(Array.isArray(mix) ? mix : [mix]))}>
      {withBtn ? (
        <Link to={link || ""} replace className={cl.title__link}>
          <Icon name="arrowLeft" className={cl.title__link__icon} />
        </Link>
      ) : (
        ""
      )}
      {children || "Title"}
    </h2>
  );
}
