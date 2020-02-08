import React, { useState } from 'react';
import NavigationLink from '../NavigationLink/NavigationLink';

type Props = {
    menuOptions: string[];
}

const NavigationLinks = (props: Props) => {
    const [ selectedPage, setSelectedPage ] = useState('');
    const { menuOptions } = props;

    function handlePageSelect(item: string) {
        setSelectedPage(item);
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