import React from "react";
import "./ErrorBanner.css";

type Props = {
  title: string,
  subtext: string,
};

const ErrorBanner = (props: Props) => {

  return (
    <div className="root-error">
        <div className="main-error"> {props.title} </div>
        <div className="sub-error"> {props.subtext} </div>
    </div>
  );
};

export default ErrorBanner;
