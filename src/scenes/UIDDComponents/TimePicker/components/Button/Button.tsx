import React from "react";
import "./style.scss";

type Props = {
  children: React.ReactNode;
  className?: string;
  type?: "submit" | "button";
};

const Button: React.FC<Props> = ({ children, className, type }: Props) => (
  // eslint-disable-next-line
  <button className={`timepicker-button ${className}`} type={type}>
    {children}
  </button>
);

Button.defaultProps = {
  className: "",
  type: "button",
};

export default Button;
