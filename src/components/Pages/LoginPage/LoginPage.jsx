import React, { useState } from 'react';
import Button from '@mui/material/Button';
import "./LoginPage.css";
import axios from 'axios';
import PropTypes from 'prop-types'
import { Login } from '@mui/icons-material';

function LoginForm(props){
  // const [username,getUsername]=useState('');
  const[email, getEmail]=useState('');
  const[password, getPassword]= useState('');

  async function handlesubmit(e){
    e.preventDefault();

    const getUser={
      email:email,
      password:password,
    };
    let response = await axios.post(`http://localhost:5000/api/users/login`, getUser);
    if(response.status==200){
      
      localStorage.setItem('token', response.data)
      window.location = '/mainfeed';
      console.log(response.data);
    }
  }

        return (
          <div className="login">
          <div className="loginWrapper">
            <div className="loginLeft">
              <h3 className="loginLogo">LIFE 214</h3>
              <span className="loginDesc">
                We got your six.
              </span>
            </div>
            <div className="loginRight">
              <div className="loginBox">
              <form className="signup" onSubmit={handlesubmit}>
           
            <input placeholder="Email" className="loginInput" value={email} onChange={(event) => getEmail(event.target.value)} type='text' />
    
            
            <input classname="input-box" placeholder="Password" className="loginInput"value={password} onChange={(event) => getPassword(event.target.value)} type='password' />          
            <button className="loginButton"href="/mainfeed"type='submit'>Log in</button>
          </form>
                {/* <input placeholder="Email" className="loginInput" value={email} onChange={(event) => getEmail(event.target.value)} type='text'/>
                <input placeholder="Password" className="loginInput" value={password} onChange={(event) => getPassword(event.target.value)} type='text' />
                <button className="loginButton"href="/mainfeed"type='submit'>Log In</button>
                <span className="loginForgot">Forgot Password?</span>
                <button className="loginRegisterButton">
                  Create a New Account
                </button> */}
              </div>
            </div>
          </div>
        </div>

        );
    }
    Login.propTypes={
      setToken:PropTypes.func.isRequired
    }
 
export default LoginForm;