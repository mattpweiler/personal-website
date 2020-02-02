import React from 'react';
import "./Title.css";

type Props = {
    text: string;
};

const Title = (props: Props) => {
    const { text } = props;
    return (
        <div className="title">
            {text}
        </div>
    );
}

export default Title;