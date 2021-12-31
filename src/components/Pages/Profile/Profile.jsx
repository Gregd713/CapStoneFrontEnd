import React, { useState }  from 'react';
import LeftBar from"../../LeftBar/LeftBar";
import Feed from "../../UserFeed/UserFeed";
import RightBar from "../../RightBar/RightBar";

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
                  src="assets/post/3.jpeg"
                  alt=""
                />
                <img
                  className="profileUserImg"
                  src="assets/person/7.jpeg"
                  alt=""
                />
              </div>
              <div className="profileInfo">
                  <h4 className="profileInfoName">Safak Kocaoglu</h4>
                  <span className="profileInfoDesc">Tag line</span>
                  <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">New York</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Madrid</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
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
