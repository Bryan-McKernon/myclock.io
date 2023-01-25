import React, { useEffect, useState } from "react";
import "./TheClock.scss";

const TheClock = (props) => {
  const [Time, setTime] = useState(new Date());

  const TickTheClock = () => {
    setTime(new Date());
  };

  useEffect(() => {
    const timer = setInterval(TickTheClock, 1000);
    return () => {
      clearInterval(timer);
    };
  });

  return (
    <div className="clock-container">
      <span
        className="clock"
        onClick={props.ClockOnClickEvent}
        style={{ fontSize: `${props.ClockStyle.fontSize}px` }}
      >
        {Time.toLocaleTimeString()}
      </span>
    </div>
  );
};

export default TheClock;
