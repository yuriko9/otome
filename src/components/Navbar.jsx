import "./Navbar.css";
import { Link } from "react-router-dom";
import { iFaHeart, iFaMagnifyingGlass } from "./icon/getIcon";

const Navbar = () => {
  return (
    <nav className="otomeNav">
      <div className="navTitle">
        <Link to="/">
          Web Otome
          {iFaHeart}
        </Link>
      </div>
      {/* <div className="navSearch">{iFaMagnifyingGlass}</div> */}
    </nav>
  );
};

export default Navbar;
