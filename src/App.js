import React, { useState } from "react";
import "./App.scss";
import TheClock from "./TheClock/TheClock";
import ControlBar from "./ControlBar/ControlBar";

function App() {
  const [ControlBarView, setControlBarView] = useState(false);
  const [ClockStyle, setClockStyle] = useState({ fontSize: 36 });

  const UpdateClockStyle = (newClockStyle) => {
    setClockStyle(newClockStyle);
  };

  const ClockOnClickEvent = () => {
    if (ControlBarView) setControlBarView(false);
    else setControlBarView(true);
  };

  return (
    <div className="App">
      <TheClock ClockOnClickEvent={ClockOnClickEvent} ClockStyle={ClockStyle} />
      {ControlBarView ? (
        <ControlBar
          ClockStyle={ClockStyle}
          UpdateClockStyle={UpdateClockStyle}
        />
      ) : null}
    </div>
  );
}

export default App;
