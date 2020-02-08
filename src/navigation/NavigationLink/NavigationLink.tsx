import React from 'react';
import './NavigationLink.css';

type Props = {
    text: string;
    onClick: () => void;
}

const NavigationLink = (props: Props) => {
    const { text, onClick } = props;
    return (
        <div className="navigation-link" onClick={onClick}>
            {text}
        </div>
    );
}

export default NavigationLink;