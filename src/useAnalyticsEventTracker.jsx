import React from "react";
import ReactGA from "react-ga";

const useAnalyticsEventTracker = (category="clock click category") => {
  const eventTracker = (action = "clock click action", label = "clock click label") => {
    ReactGA.event({category, action, label});
  }
  return eventTracker;
}
export default useAnalyticsEventTracker;