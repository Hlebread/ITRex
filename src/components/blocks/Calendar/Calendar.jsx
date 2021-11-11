import React, { useState } from "react";

import cl from "./Calendar.module.scss";
import CalendarHeader from "./CalendarHeader";
import CalendarTable from "./CalendarTable";

export default function Calendar() {
  const currentDate = new Date();
  const [date, setDate] = useState({
    current: currentDate,
	 selected: null,
    year: currentDate.getFullYear(),
    month: currentDate.getMonth(),
    day: currentDate.getDate(),
  });

  const checkDate = () => {
    if (date.month < 0) {
      setDate({ ...date, month: 11, year: --date.year });
    } else if (date.month > 11) {
      setDate({ ...date, month: 0, year: ++date.year });
    }
  };

  const incrementMonth = () => {
    setDate({ ...date, month: ++date.month });
    checkDate();
  };

  const decrementMonth = () => {
    setDate({ ...date, month: --date.month });
    checkDate();
  };

  return (
    <div className={cl.calendar}>
      <CalendarHeader
        increment={incrementMonth}
        decrement={decrementMonth}
        date={date}
      />
      <CalendarTable date={date} />
    </div>
  );
}
