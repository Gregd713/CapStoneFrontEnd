
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import LeftBar from"../../LeftBar/LeftBar";
import "./CreateEvent.css"
import axios from 'axios';

function CreateEvent(props){

  const [username,setUsername] = useState('');
  const [email,setEmail] = useState('');
  const[password, setPassword] = useState('');
  const[time, setTime]=useState('');
  const[place,setPlace]=useState('');
  const[date,setDate]=useState('');
  const[desc,setDesc]=useState('');

  async function handleSubmit(e){
    e.preventDefault();
    const postUser={
            name: username,
            password: password,
            time: time,
            place:place,
            date:date,
            desc: desc,
            isAdmin: false
    };
    let response = await axios.post(`http://localhost:5000/api/event/register-event`, postUser);
    if(response.status == 200){
      window.location = '/events'
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
                <Button variant="contained" href="/create-group" >Join Event</Button>
                </div>
                <div className="shareOption">
                <Button variant="contained" href="/create-group" >+ Create Event</Button>

                </div>
            </div>

        </div>
      
      </div>
      <div className="loginRight">
          <form className="loginBox" onSubmit={handleSubmit}>
            <input placeholder="Event Name" value={username} onChange={(event) => setUsername(event.target.value)} type='text'/>
            <input placeholder="Password to event" value={password} onChange={(event) => setPassword(event.target.value)} type='text'/>
            <input placeholder="Time" value={time} onChange={(event) => setTime(event.target.value)} type='text'/>
            <input placeholder="Date" value={date} onChange={(event) => setDate(event.target.value)} type='text'/>
            <input placeholder="Place" value={place} onChange={(event) => setPlace(event.target.value)} type='text'/>
            <input placeholder="Description" value={desc} onChange={(event) => setDesc(event.target.value)} type='text'/>

            <button className="loginButton" type="submit">
              Create Event
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

export default CreateEvent;