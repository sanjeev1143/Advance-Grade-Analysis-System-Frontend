import React from "react";

const Input = (props) => {



 

  return (
    <div className="input">
      <div className="input-label" >{props.label}</div>
      <input type="text" className="input-field" value={props.value} onChange={(e)=>props.onChange(props.type,e.target.value)}/>
    </div>
  );
};

export default Input;
