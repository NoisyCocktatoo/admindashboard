import "./topbox.scss";
import { topDealUser } from "../../data";

const TopBox = () => {
  return (
    <>
      <div className="topbox">
        <h1>L&D Team</h1>
        <div className="list">
          {topDealUser.map((user) => (
            <div className="listItem" key={user.id}>
              <div className="user">
                <img src={user.img} alt="" />
                <div className="userTexts">
                  <div className="username">{user.username}</div>
                  <div className="email">{user.position}</div>
                  <div className="email">{user.email}</div>
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
