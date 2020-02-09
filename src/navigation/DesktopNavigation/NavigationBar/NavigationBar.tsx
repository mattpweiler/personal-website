import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid/Grid';
import Title from '../../../components/Title/Title';
import Subtitle from '../../../components/Subtitle/Subtitle';
import NavigationLinks from '../NavigationLinks/NavigationLinks';
import BurgerMenu from '../../MobileNavigation/BurgerMenu/BurgerMenu';
import SideMenu from '../../MobileNavigation/SideMenu/SideMenu';
import './NavigationBar.css';

type Props = {
    onTabSelect: (page: string) => {};
    pageLinks: any;
}

const NavigationBar = (props: Props) => {
    const [ showMobileMenu, setShowMobileMenu ] = useState(false);

    function handleSelectMenu() {
        setShowMobileMenu(!showMobileMenu)
    }
    const { onTabSelect, pageLinks } = props;
    return (
        <Grid container className="navigation-bar">
            <Grid item xs={2} />
            <Grid container item xs={10} direction="column" className="desktop" justify="space-evenly" spacing={10}>
                <Grid item xs={1} />
                <Grid item >
                    <Title text="Matthew Weiler" />
                    <br />
                    <Subtitle text="Dedicated Software Engineer" />
                </Grid>
                <Grid item>
                    <NavigationLinks menuOptions={pageLinks} onTabSelect={onTabSelect} />
                </Grid>
            </Grid>
            <Grid item xs={2} className="mobile" > <BurgerMenu onClick={handleSelectMenu} /> </Grid>
        </Grid>
    );
}

export default NavigationBar;