import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import React from 'react';

function Header() {
  return (
    <AppBar position='static'>
      <Toolbar>
        <IconButton color="inherit">
          <HomeIcon />
        </IconButton>
        <Typography variant="h6" component={'span'}>
          To Do list
        </Typography>
        <IconButton color="inherit">
          <TaskAltIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
