import React, { useState } from 'react';
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
            email: email,
            password: password,
            isAdmin: false
    };
    let response = await axios.post(`http://localhost:5000/api/groups/register-group`, postUser);
    if(response.status == 200){
      window.location = '/login'
    }
  }


    return(
      <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">LIFE 214</h3>
          <span className="loginDesc">
            Create a group.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleSubmit}>
            <input placeholder="Group Name" value={username} onChange={(event) => setUsername(event.target.value)} type='text'/>
            <input placeholder="Email"value={email} onChange={(event) => setEmail(event.target.value)} type='text' />
            <input placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} type='text' />
            <button className="loginButton" type="submit">
              Sign Up
            </button>
            <button className="loginRegisterButton">Log into Account</button>
          </form>
        </div>
      </div>
    </div>
    )
}

export default CreateGroup;