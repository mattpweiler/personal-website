import React from 'react';
import "./Image.css";

type Props = {
    img: any;
    text?: string;
};

const Subtitle = (props: Props) => {
    const { text, img } = props;
    return (
        <div className="image-root">
            <img src={img} className="image"/>
            <div className="image-text"> {text} </div>
        </div>
    );
}

export default Subtitle;