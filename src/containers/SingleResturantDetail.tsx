import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';
import { Restaurant } from '../interfaces/restaurants';

const box_styles = { 
	margin: '5px',
	float: 'right' 
}
const box_styles_ = {
	margin: '15px', 
	height: '70vh',
	alignItems: 'center' 
}
const header_styles = {
	color: 'black', fontSize: '25px', fontFamily: 'WorkSans-Medium'
}
const sub_styles = { marginBottom: '5px', color: 'grey', fontSize: '15px', fontFamily: 'WorkSans-Regular' }

interface SingleResturantDetailProps {
	setAppState: React.Dispatch<React.SetStateAction<string>>
	restaurant: Restaurant | null
  }

const SingleResturantDetail: React.FC<SingleResturantDetailProps> = ({ setAppState, restaurant }) => {
  const handleRouteBack = () => {
	setAppState('searching')
  }

  React.useEffect(() => {
	window.scrollTo(0, 0)
  }, [])
  
  return (
   <Grid 
     sx={{ flexGrow: 1, justifyContent: 'center', marginTop: '20px' }}
     container
     spacing={2}
     columns={12}
    >
        <Grid 
           item lg={5} md={5} sm={6} xs={12}
          >
	      <Box sx={box_styles}>
	      	<img 
	            src={restaurant?.image_url} 
	            alt="Logo" 
	            className="resturant-image"
	          />
	          
          </Box>
        </Grid>

        <Grid item lg={6} md={7} sm={6} xs={12}>
	       <Box sx={box_styles_}>
		      <Typography sx={header_styles} variant="h4">
		         {restaurant?.name}
		      </Typography>
		      <Typography variant="subtitle2" sx={sub_styles}>
		        Address: <span className='detail'>{restaurant?.location.city}, {restaurant?.location.address1}</span>
		      </Typography>
		      <Typography variant="subtitle2" sx={sub_styles}>
		        Tel: <span className='detail'>{restaurant?.phone}</span>
		      </Typography>
		      <Typography variant="subtitle2" sx={sub_styles}>
		        Rating: <span className='detail'>{restaurant?.rating}</span>
		      </Typography>
		      <Typography variant="subtitle2" sx={sub_styles}>
			   Reveiws: <span className='detail'>{restaurant?.review_count}</span>
		      </Typography>
			  <Stack 
		        direction="row" 
		        spacing={1}
		       >
				 {restaurant?.categories && restaurant?.categories.map((cat) => {
					return <Chip label={cat?.title} variant="outlined"/>
				})}
			   </Stack>
			   <IconButton 
			     disableRipple 
				 onClick={handleRouteBack} 
				 aria-label="menu"
				>
	           <ArrowBackIcon /> 
	          </IconButton>
           </Box>
        </Grid>

   </Grid>
  );
}
export default  SingleResturantDetail;

