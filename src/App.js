import React, { useEffect, useState } from "react";
import ReactGA from "react-ga";
import useAnalyticsEventTracker from "./useAnalyticsEventTracker";
import TheClock from "./TheClock/TheClock";
import ControlBar from "./ControlBar/ControlBar";
import "./App.scss";

function App() {
  const [ControlBarView, setControlBarView] = useState(false);
  const [ClockStyle, setClockStyle] = useState({ fontSize: 84 });

  const TRACKING_ID = "G-STPKKR5ZJ7";
  const EventTrackerGA = useAnalyticsEventTracker("clock");
  ReactGA.initialize(TRACKING_ID);

  const UpdateClockStyle = (newClockStyle) => {
    setClockStyle(newClockStyle);
  };

  const ClockOnClickEvent = () => {
    if (ControlBarView) setControlBarView(false);
    else setControlBarView(true);
    EventTrackerGA("clock-click");
  };

  useEffect(() => {
    fetch("https://www.googletagmanager.com/gtag/js?id=G-STPKKR5ZJ7");
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      // eslint-disable-next-line no-undef
      dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "G-STPKKR5ZJ7");
  }, []);

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
