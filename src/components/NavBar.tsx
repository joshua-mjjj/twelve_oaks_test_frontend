import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

// Assets
import logo from '../assets/logo.png';

const box_container = { flexGrow: 1, marginBottom: '0px' }

const NavBar: React.FC = () => {

  return (
    <Box sx={box_container}>
      <AppBar elevation={0} position="relative" color="primary" sx={{ bgcolor: '#FFB928FF' }}>
        <Toolbar>
        <img className="home_logo" alt="logo" src={logo}  />
        <Box sx={{ flexGrow: 1 }} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default NavBar