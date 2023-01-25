import React from "react";
import "./FontControl.scss";

const FontControl = (props) => {
  const handleDecreaseFontSize = () => {
    if (props.ClockStyle.fontSize)
      props.UpdateClockStyle({
        fontSize: props.ClockStyle.fontSize - 12,
      });
  };

  const handleIncreaseFontSize = () => {
    if (props.ClockStyle.fontSize < 128)
      props.UpdateClockStyle({
        fontSize: props.ClockStyle.fontSize + 12,
      });
  };

  const handleFontReset = () => {
    props.UpdateClockStyle({
      fontSize: 36,
    });
  };

  return (
    <div className="font-control-container">
      <button
        onClick={handleDecreaseFontSize}
        className="font-button"
        style={{ float: "left" }}
      >
        -
      </button>
      <button
        onClick={handleIncreaseFontSize}
        className="font-button"
        style={{ float: "right" }}
      >
        +
      </button>
      <button
        onClick={handleFontReset}
        className="font-button"
        style={{
          float: "center",
          width: "120px",
          borderRadius: "2px",
          fontSize: "16px",
          height: "22px",
          marginTop: "12px",
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default FontControl;
