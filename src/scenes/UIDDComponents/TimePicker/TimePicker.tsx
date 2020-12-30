import React from "react";
import AbsTimeForm from "./components/AbsTimeForm/AbsTimeForm";
import TimeZone from "./components/TimeZone/TimeZone";
import "./style.scss";

const TimePicker = () => (
  <div className="time-picker">
    <span className="close">&times;</span>
    <div className="abs-time">
      <span className="text">Absolute time range</span>
      <AbsTimeForm />
    </div>
    <div className="rel-time">Relative time range</div>
    <TimeZone />
  </div>
);

export default TimePicker;
