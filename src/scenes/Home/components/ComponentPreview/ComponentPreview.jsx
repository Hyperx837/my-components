import React from "react";
import { Link } from "react-router-dom";

// TODO: create a ui component
// TODO: give the url the name of the component lowercase
// TODO:

const ComponentPreview = (props) => (
  <div>
    <Link to="/comp">{props.match.params.id}</Link>
  </div>
);

// ComponentPreview.defaultProps = {
//   match: {},
// };

export default ComponentPreview;
