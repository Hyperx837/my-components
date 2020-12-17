import React from "react";
import { Link } from "react-router-dom";

// TODO: create a ui component
// TODO: give the url the name of the component lowercase
// TODO:

interface Props {
  match: {
    params: {
      comp_name: string;
    };
  };
}

const ComponentPreview = ({ match }: Props) => {
  const { comp_name: compName } = match.params;
  console.log(match);
  return (
    <div>
      <Link to="/comp">{compName}</Link>
    </div>
  );
};

export default ComponentPreview;
