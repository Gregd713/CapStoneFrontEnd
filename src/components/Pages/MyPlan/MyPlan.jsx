import React, { useState }  from 'react';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import LeftBar from"../../LeftBar/LeftBar";
import RightBar from "../../RightBar/RightBar";
import './MyPlan.css'

function MyPlan(props){
    return(
<div className="profile">
        <LeftBar />
        <div className="profileRight">
          <div className="profileRightBottom">
            <div className="feed">
            <div className="feedWrapper">
            <h1>My Plan goes here</h1>
            </div>
            </div>
            <RightBar profile/>
          </div>
        </div>
      </div>
    )
}
export default MyPlan;