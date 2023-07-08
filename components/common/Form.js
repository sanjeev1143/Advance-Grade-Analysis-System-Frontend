import React from "react";
import Input from "./Input";

const Form = () => {
  return (
    <div className="form">
      <div className="form-title">Enter Marks</div>
      <Input label="Midsem Marks" />
      <Input label="Quiz Marks" />
      <div className="form-btn-container">
        <button className="form-btn">Submit</button>
      </div>
    </div>
  );
};

export default Form;
