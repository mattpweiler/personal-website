import React from 'react';
import NavigationLink from '../NavigationLink/NavigationLink';

type Props = {
    menuOptions: string[];
}

const NavigationLinks = (props: Props) => {
    const { menuOptions } = props;
    return (
        <div className="navigation-links">
            {menuOptions.map(item => {
                return (
                    <NavigationLink text={item} />
                );
            })}
        </div>
    );
}

export default NavigationLinks;