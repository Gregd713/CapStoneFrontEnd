import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';

export default function ProfileBtn() {
    const ProfileBtn = () => {
        window.location.assign("/profile"); 
    }
  return(
      <MenuItem onClick={() => ProfileBtn()}>Profile</MenuItem>
  )};