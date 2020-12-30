import React from "react";
import AbsTimeForm from "./components/AbsTimeForm/AbsTimeForm";
import Button from "./components/Button/Button";
import "./style.scss";

const TimePicker = () => (
  <div className="time-picker">
    <span className="close">&times;</span>
    <div className="abs-time">
      <span className="text">Absolute time range</span>
      <AbsTimeForm />
    </div>
    <div className="rel-time">Relative time range</div>
    <div className="time-zone">
      <Button>UTC</Button>
    </div>
  </div>
);

export default TimePicker;
