import React from "react";
import Button from "./components/Button/Button";
import "./style.scss";

const TimePicker = () => (
  <div className="time-picker">
    <span className="close">&times;</span>
    <div className="abs-time">
      <Button />
    </div>
    <div className="rel-time">Relative time range</div>
    <div className="time-zone">Time zone</div>
  </div>
);

export default TimePicker;
