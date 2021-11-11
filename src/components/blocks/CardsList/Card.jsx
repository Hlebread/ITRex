import React, { useState } from "react";
import Icon from "../../common/Icon/Icon";
import Avatar from "../User/Avatar";
import Info from "../User/Info";
import Status from "../User/Status";
import cl from "./Card.module.scss";
import ClassMixer from "../../../utils/ClassMixer";

export default function Card(props) {
  return (
    <li className={cl.card}>
      <CardHeader name={props.name} />
      <CardInfo />
    </li>
  );
}

function CardHeader(props) {
  return (
    <div className={cl.card__header}>
      <Avatar />
      <Info
        head={props.name}
        details={
          <div>
            <Status mix={cl.status} />
            Appointment confirmed
          </div>
        }
        mix={cl.card__header__details}
      />
      <CardHeaderMore />
    </div>
  );
}

function CardHeaderMore() {
  const [active, setActive] = useState(false);
  return (
    <div
      className={active ? ClassMixer(cl.more, cl.more_active) : cl.more}
      onClick={() => setActive(!active)}
      onBlur={() => setActive(false)}
    >
      <Icon name="more" />
    </div>
  );
}

function CardInfo(props) {
  return (
    <div className={cl.card__info}>
      <div className={cl.card__info__time}>
        <div className={cl.card__info__iconContainer}>
          <Icon name="clock" className={cl.card__info__iconContainer__icon} />
        </div>
        Thu Sept 10, 2021 4 pm – 5 pm
      </div>

      {!props.details ? (
        <div className={cl.card__info__details}>
          <div className={cl.card__info__iconContainer}>
            <Icon
              name="notepad"
              className={cl.card__info__iconContainer__icon}
            />
          </div>
          We will invite you in for a full review every year and more frequently
          if you are struggling with blood sugar levels
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
