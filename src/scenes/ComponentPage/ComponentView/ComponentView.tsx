import React from "react";
import { Link } from "react-router-dom";
import { TimePicker } from "scenes/UIDDComponents";
import "./style.scss";

interface Props {
  match: {
    params: {
      compName: string;
    };
  };
}

interface MapFunctionComponent {
  [key: string]: React.FunctionComponent;
}

const ComponentView = ({ match }: Props) => {
  const components: MapFunctionComponent = {
    TimePicker,
  };
  const { compName } = match.params;
  const Component = components[compName];
  return (
    <div className="uidd-component">
      <Link to="/comp" component={Component} />
    </div>
  );
};

export default ComponentView;
