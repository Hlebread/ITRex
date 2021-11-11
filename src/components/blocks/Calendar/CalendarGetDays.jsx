import React from "react";

export default function CalendarGetDays() {
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
			<td key={d} className={ClassMixer(cl.calendar__table__cell)}>
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
}
