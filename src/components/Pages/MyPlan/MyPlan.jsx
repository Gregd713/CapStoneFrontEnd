import React, { useState }  from 'react';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import LeftBar from"../../LeftBar/LeftBar";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import './MyPlan.css'

function MyPlan(props){
    return(
<div className="profile">
        <LeftBar />
        <div className="profileRight">
          <div className="profileRightBottom">
            <div className="feed">
            <div className="feedWrapper">
            <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
        <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        sx={{ width: 56, height: 56 }}
      />
          <input
            placeholder="Would you like to make a plan?"
            className="shareInput"
          />
        </div>
        <hr className="shareHr"/>
        <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
                <button className="shareButton">Make a plan</button>
                </div>
                <div className="shareOption">
                <button className="shareButton">Update plan</button>

                </div>
            </div>

        </div>
      </div>
    </div>

            </div>
            </div>

          </div>
        </div>
      </div>
    )
}
export default MyPlan;