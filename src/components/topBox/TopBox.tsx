import "./topbox.scss";
import { topDealUser } from "../../data";

const TopBox = () => {
  return (
    <>
      <div className="topbox">
        <h1>Top Deals</h1>
        <div className="list">
          {topDealUser.map((user) => (
            <div className="listItem" key={user.id}>
              <div className="user">
                <img src={user.img} alt="" />
                <div className="userTexts">
                  <div className="username">{user.username}</div>
                  <div className="username">{user.email}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TopBox;
