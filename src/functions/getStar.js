import starData from "../json/star-data.json";

// 全組の生徒データ取得
export const getAllStar = () => {
  return new Promise((resolve) => {
    resolve(starData);
  });
};

// 各組の生徒データ取得
export const getTroupeStar = (troupeName) => {
  return new Promise((resolve) => {
    const troupeData = starData.find((data) => data.troupe === troupeName);
    resolve(troupeData);
  });
};
