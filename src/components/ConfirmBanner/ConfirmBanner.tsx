import React from "react";
import "./ConfirmBanner.css";

type Props = {
  title: string,
  subtext: string,
};

const ConfirmBanner = (props: Props) => {

  return (
    <div className="root-confirm">
        <div className="main-confirm"> {props.title} </div>
        <div className="sub-confirm"> {props.subtext} </div>
    </div>
  );
};

export default ConfirmBanner;
