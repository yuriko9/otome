import StarModal from "./StarModal";
import { TROUPE_OBJ } from "../types/const";

const TroupeStar = ({ troupeData }) => {
  return (
    <>
      <div className="starContainer">
        <h1>{TROUPE_OBJ[troupeData.troupe]} スタープロフィール</h1>
        <ul className={`starList ${troupeData.troupe}`}>
          {troupeData.stars.map((star, index) => {
            return <StarModal star={star} key={index} />;
          })}
        </ul>
      </div>
    </>
  );
};

export default TroupeStar;
