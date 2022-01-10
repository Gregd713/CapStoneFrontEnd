import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import LeftBar from"../../LeftBar/LeftBar";
import "./CreateAGroup.css"
import axios from 'axios';

function CreateGroup(props){

  const [username,setUsername] = useState('');
  const [email,setEmail] = useState('');
  const[password, setPassword] = useState('');


  async function handleSubmit(e){
    e.preventDefault();
    const postUser={
            name: username,
            password: password,
            isAdmin: false
    };
    let response = await axios.post(`http://localhost:5000/api/groups/register-group`, postUser);
    if(response.status == 200){
      window.location = '/groups'
    }
  }


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
      <div className="loginRight">
          <form className="loginBox" onSubmit={handleSubmit}>
            <input placeholder="Group Name" value={username} onChange={(event) => setUsername(event.target.value)} type='text'/>
            <input placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} type='text' />
            <button className="loginButton" type="submit">
              Create Group
            </button>
          </form>
        </div>

    </div>

            </div>
            </div>

          </div>
        </div>
      </div>

    //   <div className="login">
    //     <LeftBar />
    //   <div className="loginWrapper">
    //     <div className="loginLeft">
    //       <h3 className="loginLogo">LIFE 214</h3>
    //       <span className="loginDesc">
    //         Create a group.
    //       </span>
    //     </div>
    //   </div>
    // </div>
    )
}

export default CreateGroup;