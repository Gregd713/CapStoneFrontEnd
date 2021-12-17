import React, { useState }  from 'react';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

// import './MainfeedPage.css'

function MainFeedPage(props){
    return(
        <div className="mainfeed">
          <Stack direction="row" spacing={2}>
      <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        sx={{ width: 56, height: 56 }}
      />
    </Stack>
        <h1>Something to display</h1>
        </div>
    )
}
export default MainFeedPage