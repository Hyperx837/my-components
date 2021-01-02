import React from "react";
import "./style.scss";

// type Props = {};

const TimeZone: React.FC = () => (
  <div className="time-zone">
    <button type="button">UTC</button>
    <span className="change-timezone">Change time zone</span>
  </div>
);

export default TimeZone;
