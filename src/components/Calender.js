import React, { useState } from "react";
import Calendar from "react-calendar";

const Calender = () => {
  const [date, setDate] = useState(new Date());
  const onChange = (date) => {
    setDate(date);
  };
  return (
    <div
      className=" bg-slate-500 font-mono text-xl p-10
    "
    >
      <Calendar
        className="mx-auto max-w-lg bg-pink-100 p-4 rounded-2xl text-black shadow-2xl"
        showWeekNumbers
        onChange={onChange}
        value={date}
      />
      <div className="my-10 font-bold text-xl">{date.toString()}</div>
    </div>
  );
};

export default Calender;
