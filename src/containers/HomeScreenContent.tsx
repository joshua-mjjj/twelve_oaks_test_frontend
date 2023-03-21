import * as React from 'react';
import Lottie from 'react-lottie';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// Components
import Form from '../components/Form'

// Assets
import anime from '../assets/animations/load.json';

const box_styles = { 
	margin: '5px',
	height: '70vh',
	float: 'right' 
}
const box_styles_ = {
	margin: '15px', 
	height: '70vh',
	alignItems: 'center' 
}
const defaultOptions = {
  loop: true,
  autoplay: true, 
  animationData: anime,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};
const display = { xs: 'none', lg: 'block', md: 'block', sm: 'block' }
const sub_header = { color: '#FFB928FF', fontWeight: 'bold' }
const sub_header_small = { marginBottom: '20px' }


interface HomeScreenContentProps {
  getDataObject: (data: Object) => void
}
const HomeScreenContent: React.FC<HomeScreenContentProps> = ({ getDataObject }) => {
  return (
   <Grid 
     sx={{ flexGrow: 1 }}
     container
     spacing={2}
     columns={12}
    >
        <Grid 
           item lg={5} md={5} sm={6} 
           display={display}
          >
	      <Box sx={box_styles}>
	      	<Lottie 
		        options={defaultOptions}
		        height={300}
		        width={300}
		     />
          </Box>
        </Grid>

        <Grid item lg={6} md={7} sm={6} xs={12}>
	       <Box sx={box_styles_}>
		      <Typography sx={sub_header} variant="h4">
		         Find restaurants around the corner
		      </Typography>
		      <Typography variant="subtitle2" sx={sub_header_small}>
		        Globle Bites lets you find restaurants from anywhere you are, get started!
		      </Typography>
	          <Form 
              sendDataObject={getDataObject}
            />
           </Box>
        </Grid>

   </Grid>
  );
}
export default  HomeScreenContent;

