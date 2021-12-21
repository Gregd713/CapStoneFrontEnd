import React, { useState }  from 'react';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import LeftBar from"../../LeftBar/LeftBar";
import Feed from "../../Feed/Feed";
import RightBar from "../../RightBar/RightBar";
import './MainFeedPage.css'

function MainFeedPage(props){
    return(
<div className="profile">
        <LeftBar />
        <div className="profileRight">
          <div className="profileRightBottom">
            <Feed />
            <RightBar profile/>
          </div>
        </div>
      </div>
    )
}
export default MainFeedPage