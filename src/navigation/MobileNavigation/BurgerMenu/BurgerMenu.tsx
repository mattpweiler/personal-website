import React from "react";
import "./BurgerMenu.css";

type Props = {
  onClick: any;
};

const BurgerMenu = (props: Props) => {
  function handleSelect() {
    const { onClick } = props;
    onClick();
  }
  return (
    <div
      className="root-burger"
      onClick={handleSelect}
      role="button"
      onKeyPress={handleSelect}
    >
        <div className="burger-group">
          <div className="burger"> </div>
          <div className="burger"> </div>
          <div className="burger"> </div>
        </div>
    </div>
  );
};

export default BurgerMenu;
