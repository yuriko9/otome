import "./Home.css";
import { TROUPE_OBJ } from "../types/const";
import { Link } from "react-router-dom";
import { iFaCaretRight } from "../components/icon/getIcon";

const Home = () => {
  let linkList = [];
  Object.keys(TROUPE_OBJ).forEach((key, index) => {
    linkList.push(
      <li key={index}>
        <Link className={`troupeLink ${key}`} to={`/star/${key}`}>
          {iFaCaretRight}
          {TROUPE_OBJ[key]}
        </Link>
      </li>
    );
  });

  return (
    <>
      <div className="topContainer">
        <div className="topArea">
          <div className="topDescription" style={{ fontWeight: "600" }}>
            宝塚おとめWeb版
          </div>
          <div className="topDescription">
            <ul className="topLinkList">
              <li>
                <Link to="/star">
                  {iFaCaretRight}
                  全生徒一覧
                </Link>
              </li>
            </ul>
            <ul className="topLinkList">{linkList}</ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
