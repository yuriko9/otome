import "./Troupe.css";
import TroupeStar from "../components/TroupeStar";
import { useState, useEffect } from "react";
import { getAllStar } from "../functions/getStar";

const style = {
  fontSize: "35px",
  fontWeight: "bold",
  borderBottom: "2px solid",
  width: "1000px",
  margin: "40px auto 20px auto",
  paddingBottom: "10px",
  textAlign: "center",
};

const StarIndex = () => {
  const [starData, setStarData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStarData = async () => {
      let res = await getAllStar();
      setStarData(res);
      setLoading(false);
    };
    fetchStarData();
  }, []);

  return (
    <>
      <div>
        {loading ? (
          <h1 className="loading">Now Loading...</h1>
        ) : (
          <div>
            {/* <div style={style}>全生徒一覧</div> */}
            {starData.map((troupeData, index) => {
              return <TroupeStar troupeData={troupeData} key={index} />;
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default StarIndex;
