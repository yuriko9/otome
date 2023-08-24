// modal内テーブル
export default function StarTable({ star }) {
  return (
    <>
      {/* <img style={{ width: "200px" }} src={star.imgSrc} alt={star.nameEn} /> */}
      <h3>
        {star.nameJp} / {star.nameEn}
      </h3>
      <table className="starTable">
        <tbody>
          <tr>
            <th>誕生日</th>
            <td>{star.birthday}</td>
          </tr>
          <tr>
            <th>出身地</th>
            <td>{star.birthPlace}</td>
          </tr>
          <tr>
            <th>身長</th>
            <td>{star.height}</td>
          </tr>
          <tr>
            <th>初舞台</th>
            <td>
              {star.firstStage}（{star.graduate}期生）
            </td>
          </tr>
          <tr>
            <th>好きだった役</th>
            <td>{star.favoriteRole}</td>
          </tr>
          <tr>
            <th>愛称</th>
            <td>{star.nickName}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
