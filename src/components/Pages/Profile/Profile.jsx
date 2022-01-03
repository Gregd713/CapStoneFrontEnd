import React, { useState }  from 'react';
import LeftBar from"../../LeftBar/LeftBar";
import Feed from "../../UserFeed/UserFeed";
import RightBar from "../../RightBar/RightBar";
import profile1 from "../Images/profile1.jpg";
import lightyear from "../Images/lightyear.jpg"
function Profile(props){
    return(
        <>
        <div className="profile">
          <LeftBar />
          <div className="profileRight">
            <div className="profileRightTop">
              <div className="profileCover">
                <img
                  className="profileCoverImg"
                  src={lightyear}
                  alt=""
                />
                <img
                  className="profileUserImg"
                  src={profile1}
                  alt=""
                />
              </div>
              <div className="profileInfo">
                  <h4 className="profileInfoName">Greg Delgado</h4>
                  <span className="profileInfoDesc">Veteran</span>
                  <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Houston</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Branch:</span>
            <span className="rightbarInfoValue">Army</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">HRIS:</span>
            <span className="rightbarInfoValue">SGT</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">LS:</span>
            <span className="rightbarInfoValue">November 2021</span>
          </div>
        </div> 
              </div>
            </div>
            <div className="profileRightBottom">
              <Feed username="jonh" />
              <RightBar profile/>
            </div>
          </div>
        </div>
      </>
    )
}
export default Profile
