import React, { useState } from 'react';
import NavigationLink from '../NavigationLink/NavigationLink';

type Props = {
    menuOptions: string[];
    onTabSelect: (page: string) => {};
}

const NavigationLinks = (props: Props) => {
    const [ selectedPage, setSelectedPage ] = useState('');
    const { menuOptions, onTabSelect } = props;

    function handlePageSelect(page: string) {
        setSelectedPage(page);
        onTabSelect(page);
    }

    return (
        <div className="navigation-links">
            {menuOptions.map(item => {
                return (
                    <NavigationLink text={item} onClick={() => handlePageSelect(item)} />
                );
            })}
        </div>
    );
}

export default NavigationLinks;