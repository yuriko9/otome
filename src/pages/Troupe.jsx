import "./Troupe.css";
import TroupeStar from "../components/TroupeStar";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getTroupeStar } from "../functions/getStar";
import { TROUPE_OBJ } from "../types/const";

const Troupe = () => {
  const [troupeData, setTroupeData] = useState({});
  const [loading, setLoading] = useState(true);
  const { troupeName } = useParams();
  const flag = Object.keys(TROUPE_OBJ).includes(troupeName);

  useEffect(() => {
    const fetchStarData = async () => {
      let res = await getTroupeStar(troupeName);
      setTroupeData(res);
      setLoading(false);
    };
    fetchStarData();
  }, [troupeName]);

  if (!flag) {
    return <h2 className="noMatch">このページは存在しません。</h2>;
  }

  return (
    <>
      <div className="main">
        {loading ? (
          <h1 className="loading">Now Loading...</h1>
        ) : (
          <TroupeStar troupeData={troupeData} />
        )}
      </div>
    </>
  );
};

export default Troupe;
