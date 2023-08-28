import "./Home.css";
import { TROUPE_OBJ } from "../types/const";
import { Link } from "react-router-dom";
import { iFaCaretRight } from "../components/icon/getIcon";

const Home = () => {
  let linkList = [];
  Object.keys(TROUPE_OBJ).forEach((key, index) => {
    linkList.push(
      <li key={index}>
        <Link className={`troupeLink ${key}`} to={`/otome/star/${key}`}>
          {iFaCaretRight}
          {TROUPE_OBJ[key]}
        </Link>
      </li>
    );
  });

  return (
    <>
      <h1 className="title">宝塚おとめWeb版</h1>
      <div className="topContainer">
        <div className="linkContainer">
          <ul className="linkList">
            <li>
              <Link to="/otome/star">
                {iFaCaretRight}
                全生徒一覧
              </Link>
            </li>
          </ul>
          <ul className="linkList">{linkList}</ul>
        </div>
      </div>
    </>
  );

  // return (
  //   <>
  //     <div className="topContainer">
  //       <div className="topArea">
  //         <div className="topDescription" style={{ fontWeight: "600" }}>
  //           宝塚おとめWeb版
  //         </div>
  //         <div className="topDescription pc-only">
  //           <ul className="topLinkList">
  //             <li>
  //               <Link to="/otome/star">
  //                 {iFaCaretRight}
  //                 全生徒一覧
  //               </Link>
  //             </li>
  //           </ul>
  //           <ul className="topLinkList">{linkList}</ul>
  //         </div>
  //         <div className="topDescription sp-only">
  //           <ul className="topLinkList">
  //             <li>
  //               <Link to="/otome/star">
  //                 {iFaCaretRight}
  //                 全生徒一覧
  //               </Link>
  //             </li>
  //             {linkList}
  //           </ul>
  //         </div>
  //       </div>
  //     </div>
  //   </>
  // );
};

export default Home;
