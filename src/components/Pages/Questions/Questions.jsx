import React, { useState }  from 'react';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import LeftBar from"../../LeftBar/LeftBar";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import './Questions.css'

function MyPlan(props){
    return(
<div className="profile">
        <LeftBar />
        <div className="profileRight">
          <div className="profileRightBottom">
            <div className="feed">
            <div className="feedWrapper">
            <h1>Questions go here</h1>
            </div>
            </div>
          </div>
        </div>
      </div>
    )
}
export default MyPlan;