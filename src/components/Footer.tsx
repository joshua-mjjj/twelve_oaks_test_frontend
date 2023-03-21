import React from 'react';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';

// Assets
import logo from '../assets/fav.png';

const Footer: React.FC = () => {
  
  return (
    <footer >
      <Grid 
         container 
         sx={{ padding: '30px', backgroundColor: '#1D1D1DFF' }}
       >
        <Grid item xs={12} md={12} >
          <img 
            src={logo} 
            alt="Logo" 
            className="footer-image"
          />
        </Grid>
        <Grid item xs={12} md={12} >
          <Typography sx={{ color: 'white' }} variant="h6">Global Bites. Inc</Typography>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
