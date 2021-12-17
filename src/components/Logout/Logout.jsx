import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';

export default function Logout() {
    const logOutBtn = () => {
        localStorage.removeItem("token");
        window.location.assign("/"); 
    }
  return(
      <MenuItem onClick={() => logOutBtn()}>log out </MenuItem>
  )};