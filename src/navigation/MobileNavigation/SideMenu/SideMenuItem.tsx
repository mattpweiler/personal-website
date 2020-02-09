import React, { useState } from "react";
import "./SideMenuItem.css";

type Props = {
  text: string;
  onSelect: any;
};

const SideMenuItem = (props: Props) => {

   function handleSelect() {
        const { onSelect } = props;
        onSelect(props.text);
    }
  return (
    <div className="root-sidebar-item" onClick={handleSelect}>
      {props.text}
    </div>
  );
};

export default SideMenuItem;
