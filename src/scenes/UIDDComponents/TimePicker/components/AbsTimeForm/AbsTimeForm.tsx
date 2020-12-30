import React from "react";
import Button from "../Button/Button";
import "./style.scss";

const AbsTimeForm: React.FC = () => (
  <form>
    <label htmlFor="from">
      <span className="label-text">From</span>
      <input type="text" id="from" name="from" />
    </label>
    <label htmlFor="to">
      <span className="label-text">To</span>
      <input type="text" id="to" name="to" />
    </label>
    <Button className="apply">Apply Time Range</Button>
  </form>
);

export default AbsTimeForm;
