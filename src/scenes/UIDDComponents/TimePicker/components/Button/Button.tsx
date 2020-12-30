import React from "react";
import "./style.scss";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Button = ({ children, className }: Props) => (
  <button className={`timepicker-button ${className}`} type="submit">
    {children}
  </button>
);

Button.defaultProps = {
  className: "",
};

export default Button;
