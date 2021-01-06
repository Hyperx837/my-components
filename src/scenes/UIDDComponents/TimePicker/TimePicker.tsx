import React from "react";
import AbsTimeForm from "./components/AbsTimeForm/AbsTimeForm";
import RelTime from "./components/RelTime/RelTime";
import TimeZone from "./components/TimeZone/TimeZone";
import "./style.scss";

const TimePicker = () => (
  <div className="time-picker">
    <span className="close">&times;</span>
    <div className="abs-time">
      <span className="text">Absolute time range</span>
      <AbsTimeForm />
    </div>
    <div className='wrapper'>
      <RelTime />
    </div>
    <TimeZone />
  </div>
);

export default TimePicker;
