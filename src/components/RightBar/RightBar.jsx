import "./RightBar.css";
import Online from "../Online/Online";
import { Users } from "../../dummyData";
import { Avatar } from "@mui/material";

export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birhday today.
          </span>
        </div>
        <img className="rightbarAd" src="assets/ad.png" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>

        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />

            <span className="rightbarFollowingName">John Doe</span>
          </div>
          <div className="rightbarFollowing">
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />

            <span className="rightbarFollowingName">Jane Doe</span>
          </div>
          <div className="rightbarFollowing">
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />

            <span className="rightbarFollowingName">Billy Bob</span>
          </div>
          <div className="rightbarFollowing">
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />

            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />

            <span className="rightbarFollowingName">Jane Carter</span>
          </div>
          <div className="rightbarFollowing">
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />

            <span className="rightbarFollowingName">Juan Carter</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
