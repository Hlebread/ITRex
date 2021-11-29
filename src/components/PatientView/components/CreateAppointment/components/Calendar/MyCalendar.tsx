import React, { FC } from "react";
import { IoChevronForwardOutline, IoChevronBackOutline } from "react-icons/io5";

import StyledCalendar from "./MyCalendar.style";

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
const dayNames = ["s", "m", "t", "w", "t", "f", "s"];

const MyCalendar: FC = () => (
  <StyledCalendar
    view="month"
    locale="us-EN"
    formatShortWeekday={(locale, date) => dayNames[date.getDay()]}
    prevLabel={<IoChevronBackOutline />}
    prev2Label={null}
    nextLabel={<IoChevronForwardOutline />}
    next2Label={null}
    navigationLabel={({ date }) =>
      `${months[date.getMonth()]} ${date.getFullYear()}`
    }
  ></StyledCalendar>
);

export default MyCalendar;
