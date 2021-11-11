import React from "react";
import cl from "./Calendar.module.scss";
import ClassMixer from "../../../utils/ClassMixer";

export default function CalendarTableBody({ date }) {
  const d = new Date(date.year, date.month);
  const dPrev = new Date(date.year, date.month);
  const getDay = (d) => d.getUTCDay();
  dPrev.setDate(dPrev.getDate() - getDay(d));

  const getDaysOfPreviousMonth = () => {
    let days = [];
    for (let i = 0; i < getDay(d); i++) {
      days = [
        ...days,
        <td
          key={dPrev.getTime()}
          className={ClassMixer(
            cl.calendar__table__cell,
            cl.calendar__table__cell_other
          )}
        >
          {dPrev.getDate()}
        </td>,
      ];
      dPrev.setDate(dPrev.getDate() + 1);
    }
    return days;
  };

  const getDaysOfCurrentMonth = () => {
    let days = [];
    while (d.getMonth() === date.month) {
      days = [
        ...days,
        <td
          key={d}
          className={ClassMixer(
            cl.calendar__table__cell,
            d.getFullYear() === date.current.getFullYear() &&
              d.getMonth() === date.current.getMonth() &&
              d.getDate() === date.current.getDate()
              ? cl.calendar__table__cell_current
              : null
          )}
        >
          {d.getDate()}
        </td>,
      ];
      d.setDate(d.getDate() + 1);
    }
    return days;
  };

  const getDaysOfNextMonth = () => {
    let days = [];
    if (getDay(d) !== 0) {
      for (let i = getDay(d); i < 7; i++) {
        days = [
          ...days,
          <td
            key={d.getTime()}
            className={ClassMixer(
              cl.calendar__table__cell,
              cl.calendar__table__cell_other
            )}
          >
            {d.getDate()}
          </td>,
        ];
        d.setDate(d.getDate() + 1);
      }
      return days;
    }
    return days;
  };

  const days = [
    ...getDaysOfPreviousMonth(),
    ...getDaysOfCurrentMonth(),
    ...getDaysOfNextMonth(),
  ];

  const getWeeks = () => {
    let weeks = [];
    let l = days.length / 7;
    for (let i = 0; i < l; i++) {
      let week = days.splice(0, 7);
      weeks = [...weeks, [...week]];
    }
    return weeks;
  };

  const weeks = getWeeks().map((week, index) => (
    <tr key={index}>{week.map((e) => e)}</tr>
  ));

  return <tbody>{weeks.map((week) => week)}</tbody>;
}
