import React, { useState }  from 'react';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import LeftBar from"../../LeftBar/LeftBar";
import RightBar from "../../RightBar/RightBar";
import './Bookmarks.css'

function Bookmarks(props){
    return(
<div className="profile">
        <LeftBar />
        <div className="profileRight">
          <div className="profileRightBottom">
            <div className="feed">
            <div className="feedWrapper">
            <h1>Bookmarks go here.</h1>
            </div>
            </div>
          </div>
        </div>
      </div>
    )
}
export default Bookmarks;