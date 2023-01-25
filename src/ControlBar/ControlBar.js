import React from "react";
import "./ControlBar.scss";
import FontControl from "./FontControl/FontControl";

const ControlBar = (props) => {
  return (
    <div className="control-bar-container">
      <FontControl
        ClockStyle={props.ClockStyle}
        UpdateClockStyle={props.UpdateClockStyle}
      />
    </div>
  );
};

export default ControlBar;
