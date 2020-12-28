import React from "react";

const Button = () => {
  const styles = {
    border: "none",
    borderRadius: "1em",
    width: "10em",
    height: "2em",
  };
  return (
    <button style={styles} type="submit">
      button
    </button>
  );
};

export default Button;
