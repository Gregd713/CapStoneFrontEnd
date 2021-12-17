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
      console.log(response.data);
      localStorage.setItem('token', response.data)
      window.location = '/mainfeed';
    }
  }

        return (
          <form className="signup" onSubmit={handlesubmit}>
            <lable>Email</lable>
            <input value={email} onChange={(event) => getEmail(event.target.value)} type='text' />
    
            <lable>Password</lable>
            <input value={password} onChange={(event) => getPassword(event.target.value)} type='text' />          
            <button href="/profile"type='submit'>Log in</button>
          </form>
        );
    }
    Login.propTypes={
      setToken:PropTypes.func.isRequired
    }
 
export default LoginForm;