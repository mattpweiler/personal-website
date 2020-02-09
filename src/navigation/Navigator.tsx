import React, { useState } from 'react';
import MobileNavBar from './MobileNavigation/MobileNavBar';
import NavigationBar from './DesktopNavigation/NavigationBar/NavigationBar';

const pageLinks = [
    'Home',
    'Resume',
    'Projects and Skills',
    'Contact Me',
];

type Props = {
    onTabSelect: (page: string) => {};
}

const Navigator = (props: Props) => {

    const { onTabSelect } = props;
    return (
        <div>
            <div className="mobile"> <MobileNavBar pageLinks={pageLinks} onChange={onTabSelect} text={"Matt Weiler"}/> </div>
            <div className="desktop"> <NavigationBar pageLinks={pageLinks} onTabSelect={onTabSelect} /> </div>
        </div>
    );
}

export default Navigator;