import React from "react";
import cl from "./Calendar.module.scss";
import ClassMixer from "../../../utils/ClassMixer";
import CalendarTableBody from "./CalendarTableBody";

export default function CalendarTable({ date }) {
  return (
    <table className={cl.calendar__table}>
      <CalendarTableHead />
      <CalendarTableBody date={date} />
    </table>
  );
}

function CalendarTableHead(props) {
  const dayNames = ["m", "t", "w", "t", "f", "s", "s"];
  return (
    <thead>
      <tr>
        {dayNames.map((day, i) => (
          <td
            className={ClassMixer(
              cl.calendar__table__cell,
              cl.calendar__table__cell_header
            )}
            key={i}
          >
            {day}
          </td>
        ))}
      </tr>
    </thead>
  );
}
