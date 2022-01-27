import "./RightBar.css";
import Online from "../Online/Online";
import { Users } from "../../dummyData";
import { Avatar } from "@mui/material";
import pic1 from "../Images/pic1.jpg";
import pic2 from "../Images/pic2.jpg";
import pic3 from "../Images/pic3.jpg";
import pic4 from "../Images/pic4.jpg";
import pic5 from "../Images/pic5.jpg";
import pic6 from "../Images/pic6.jpg";

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
          <Avatar alt="Remy Sharp" src={pic1} />

            <span className="rightbarFollowingName">Julia Doe</span>
          </div>
          <div className="rightbarFollowing">
          <Avatar alt="Remy Sharp" src={pic2}/>

            <span className="rightbarFollowingName">John Doe</span>
          </div>
          <div className="rightbarFollowing">
          <Avatar alt="Remy Sharp" src={pic3} />

            <span className="rightbarFollowingName">Jill Bob</span>
          </div>
          <div className="rightbarFollowing">
          <Avatar alt="Remy Sharp" src={pic4} />

            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
          <Avatar alt="Remy Sharp" src={pic5} />

            <span className="rightbarFollowingName">Jones Carter</span>
          </div>
          <div className="rightbarFollowing">
          <Avatar alt="Remy Sharp" src={pic6} />

            <span className="rightbarFollowingName">Judith Carter</span>
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
