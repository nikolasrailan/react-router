import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
  return (
    <button
      style={{ width: `${props.width}px`, height: `${props.width / 3}px` }}
    >
      {props.children}
    </button>
  );
};

Button.defaultProps = {
  margin: "10px",
};

Button.protoTypes = {
  width: PropTypes.number.isRequired,
};

export default Button;
