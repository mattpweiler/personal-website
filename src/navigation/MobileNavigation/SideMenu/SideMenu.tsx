import React, { useEffect } from "react";
import "./SideMenu.css";
import SideMenuItem from "./SideMenuItem";

type Props = {
  onChange: any,
  onClose: any,
  pageLinks: string[],
};

const SideMenu = (props: Props) => {

  const { onChange, onClose, pageLinks } = props;
  useEffect(() => {
    // return function to be called when unmounted
    document.addEventListener("mousedown", handleClick);
    return () => {
      // add when mounted
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  function handleClick(event: any) {
    if(!(event.target.className === 'root-sidebar-item')) {
      handleDeselect();
    }
  }

    const handleSelect = (page: any) => {
      onChange(page);
    }
    function handleDeselect() {
        onClose();
      }
    return (
      <div className="sidebar-root">
        {pageLinks.map(link => {
          return <SideMenuItem onSelect={handleSelect} text={link}/>
        })}
      </div>
    );
}

export default SideMenu;
