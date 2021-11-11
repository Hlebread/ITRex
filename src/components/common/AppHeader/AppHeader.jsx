import React from "react";
import User from "../../blocks/User/User";
import Icon from "../Icon/Icon";
import cl from "./AppHeader.module.scss";
import Info from "../../blocks/User/Info";
import Avatar from "../../blocks/User/Avatar";

function Logo() {
  return (
    <div className={cl.appHeader__logo}>
      <Icon name="logo" className={cl.appHeader__logo__icon} />
      <Icon name="logo-title" className={cl.appHeader__logo__title} />
    </div>
  );
}

export default function AppHeader() {
  return (
    <header className={cl.appHeader}>
      <Logo />
      <User>
        <Info head="Miranda Nelson" details="Doctor" mix={cl.info_appHeader} />
        <Avatar withStatus={true} status="active" />
      </User>
    </header>
  );
}
