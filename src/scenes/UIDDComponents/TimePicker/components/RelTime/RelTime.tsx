import React from "react";
import "./style.scss";

const RelTime: React.FC = () => {
  const text = ["Last 5 minutes", ""];
  return (
    <div className="rel-time">
      <span className="text">Relative time range</span>
      <div className="pick-rel-time">
        <button>Last 5 minutes</button>
        <button> Last 15 minutes</button>
        <button>Last 30 minutes</button>
        <button>Last 1 hour</button>
        <button>Last 3 hour</button>
        <button>Last 6 hour</button>
        <button>Last 12 hour</button>
      </div>
    </div>
  );
};

export default RelTime;
