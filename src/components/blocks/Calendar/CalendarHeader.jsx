import React from "react";
import Icon from "../../common/Icon/Icon";
import Title from "../../common/Title/Title";
import cl from "./Calendar.module.scss";

export default function CalendarHeader({ increment, decrement, date }) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className={cl.calendar__header}>
      <div
        className={cl.calendar__header__iconContainer}
        onClick={decrement}
      >
        <Icon name="arrowLeft" className={cl.calendar__icon} />
      </div>

      <Title mix={cl.calendar__header__title}>
        {months[date.month]} {date.year}
      </Title>

      <div
        className={cl.calendar__header__iconContainer}
        onClick={increment}
      >
        <Icon name="arrowRight" className={cl.calendar__icon} />
      </div>
    </div>
  );
}
