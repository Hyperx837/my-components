import React from "react";
import Button from "../Button/Button";
import "./style.scss";

// type Props = {};

const TimeZone: React.FC = () => (
  <div className="time-zone">
    <Button>UTC</Button>
    <span className="change-timezone">Change time zone</span>
  </div>
);

export default TimeZone;
