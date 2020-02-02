import React from 'react';
import "./Subtitle.css";

type Props = {
    text: string;
};

const Subtitle = (props: Props) => {
    const { text } = props;
    return (
        <div className="subtitle">
            {text}
        </div>
    );
}

export default Subtitle;