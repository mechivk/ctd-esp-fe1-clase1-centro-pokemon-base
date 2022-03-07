import React, { useState, useContext } from "react";
import { FormContext } from "../../context/FormContext";

const Input = ({ name, label, type = "text", placeholder }) => {
  const context = useContext(FormContext);
  const [inputValue, setInputValue] = useState();

  const onChange = (event) => {
    setInputValue(event.target.value);
  };

  const onBlur = (event) => {
    event.preventDefault();
    context.dispatch({
      type: type,
      attribute: name,
      payload: inputValue,
    });
  };

  return (
    <div className="input-contenedor">
      <label htmlFor={name}>{label}</label>
      <input
        placeholder={placeholder}
        type={type}
        id={name}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default Input;
