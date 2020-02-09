import React, { useState } from "react";
import "./MobileNavBar.css";
import BurgerMenu from './BurgerMenu/BurgerMenu';
import SideMenu from './SideMenu/SideMenu';

type Props = {
  text: string,
  pageLinks: any,
  onChange: any,
};

const MobileNavBar = (props: Props) => {
    const { onChange, pageLinks } = props;

  const [menuSelected, setMenu] = useState(false);

  function toggleMenu() {
    setMenu(!menuSelected);
  }
  function handleStop() {
    setMenu(false);
  }
  
  function handleSelect(page: any) {
    setMenu(false);
    onChange(page);
  }

  const menu = menuSelected ? <SideMenu onClose={handleStop} onChange={handleSelect} pageLinks={pageLinks} /> : null;
    return (
      <div className="root-header-mobile">
        <span> <BurgerMenu onClick={toggleMenu}/> </span>
        <span className="mobile-logo"> {props.text} </span>
        {menu}
      </div>
    );
}

export default MobileNavBar;
