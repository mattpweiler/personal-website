import React from 'react';
import './NavigationLink.css';

type Props = {
    text: string;
}

const NavigationLink = (props: Props) => {
    const { text } = props;
    return (
        <div className="navigation-link">
            {text}
        </div>
    );
}

export default NavigationLink;