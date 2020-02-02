import React from "react";
import "./Form.css";

type Props = {
  label: string;
  placeholder: string;
  value?: string;
  onChange: any;
};

const Form = (props: Props) => {
  const { label, placeholder, value, onChange } = props;

  function handleChange(event: any) {
    onChange(event.target.value);
  }

  return (
    <div className="form">
      <div className="form-label">{label}</div>
      <span>
          <input
            className="form-input"
            placeholder={placeholder}
            style={{width: "100%"}}
            value={value}
            onChange={handleChange}
            type="text"
          />
      </span>
    </div>
  );
};

export default Form;
