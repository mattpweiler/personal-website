import React from "react";
import "./Button.css";

type Props = {
  text: string;
  disabled?: boolean;
  onClick: any;
};

const Button = (props: Props) => {
  const { onClick, text, disabled } = props;

  function handleClick() {
    onClick();
  }

  return (
    <button
      className="button-text"
      disabled={disabled}
      type="button"
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;
