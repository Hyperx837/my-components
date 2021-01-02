import React from "react";
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
    <button type="submit">Apply Time Range</button>
  </form>
);

export default AbsTimeForm;
