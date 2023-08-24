import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import "./SideDrawer.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { TROUPE_OBJ } from "../types/const";
import { iFaBars } from "./icon/getIcon";

const SideDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  let linkList = [];
  Object.keys(TROUPE_OBJ).forEach((key, index) => {
    linkList.push(
      <li key={index}>
        <Link
          className={`troupeLink ${key}`}
          onClick={toggleDrawer}
          to={`/star/${key}`}
        >
          {TROUPE_OBJ[key]}
        </Link>
      </li>
    );
  });

  return (
    <>
      <div onClick={toggleDrawer} className="drawerMenu">
        {iFaBars}
      </div>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        size="300px"
        className="troupeDrawer"
      >
        <div className="drawerTitle">
          <Link onClick={toggleDrawer} to="/">
            Home
          </Link>
        </div>
        <ul className="drawerTroupeList">
          <li>
            <Link onClick={toggleDrawer} to="/star">
              全生徒一覧
            </Link>
          </li>
          {linkList}
        </ul>
      </Drawer>
    </>
  );
};

export default SideDrawer;
