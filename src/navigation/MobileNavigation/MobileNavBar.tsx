import React, { useState } from "react";
import Grid from '@material-ui/core/Grid/Grid';
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
      <Grid container className="root-header-mobile">
        <Grid item xs={2}> <BurgerMenu onClick={toggleMenu}/> </Grid>
        <Grid item xs={10} className="mobile-logo"> {props.text} </Grid>
        {menu}
      </Grid>
    );
}

export default MobileNavBar;
