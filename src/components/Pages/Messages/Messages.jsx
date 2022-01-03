import React, { useState }  from 'react';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import LeftBar from"../../LeftBar/LeftBar";
import RightBar from "../../RightBar/RightBar";
import {ChatEngine} from 'react-chat-engine';
import './Messages.css'

function Messages(props){
    return(
<div className="profile">
        <LeftBar />
        <div className="profileRight">
          <div className="profileRightBottom">
            <div className="feed">
            <div className="feedWrapper">
            <ChatEngine
              projectID='53beceec-6ea9-45ab-b2f4-052f74f4be6a'
              userName='Greg'
              userSecret='Greg'
            />
            </div>
            </div>
          </div>
        </div>
      </div>
    )
}
export default Messages;