import "./Troupe.css";
import TroupeStar from "../components/TroupeStar";
import { useState, useEffect } from "react";
import { getAllStar } from "../functions/getStar";

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
