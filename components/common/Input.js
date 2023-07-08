import React from "react";

const Input = (props) => {
  return (
    <div className="input">
      <div className="input-label">{props.label}</div>
      <input type="text" className="input-field" />
    </div>
  );
};

export default Input;
