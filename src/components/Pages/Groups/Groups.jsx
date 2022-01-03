import React, { useState }  from 'react';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import LeftBar from"../../LeftBar/LeftBar";
import {PermMedia, Label,Room, EmojiEmotions} from "@material-ui/icons";
import './Groups.css'

function Groups(props){
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
            placeholder="Would you like to join or create a group?"
            className="shareInput"
          />
        </div>
        <hr className="shareHr"/>
        <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
                <Button variant="contained" href="/create-group" >Join a Group</Button>
                </div>
                <div className="shareOption">
                <Button variant="contained" href="/create-group" >+ Create a Group</Button>

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
export default Groups;