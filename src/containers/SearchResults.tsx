import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FormResults from '../components/FormResults'
import SingleRestuarant from '../components/SingleRestuarant'

// Interfaces
import { Restaurant } from '../interfaces/restaurants';

const box_styles_ = {
	margin: '15px', 
	height: 'auto',
	marginBottom: '30px',
	alignItems: 'center' 
}
const header =  { color: '#FFB928FF', fontWeight: 'bold' }

interface SearchIconProps {
	location: string | null
	search_term: string | null
	loading: boolean
	getDataObject: (data: Object) => void
	restaurants_data: Restaurant[] | null
	no_results_found: boolean
	RouteSingleRestuarant: (res_ : Restaurant) => void
}

const SearchRsults: React.FC<SearchIconProps> = ({ 
	location, 
	search_term, 
	RouteSingleRestuarant, 
	restaurants_data,
	loading,
	getDataObject,
	no_results_found
}) => {

  const viewSingleRestuarant = (restaurant) => {
	RouteSingleRestuarant(restaurant)
  }
  
  return (
   <Grid 
     sx={{ flexGrow: 1 }}
     container
     columns={12}
    >
        <Grid item lg={12} md={12} sm={12} xs={12}>
         <FormResults 
		 	 location={location}
			 search_term={search_term}
			 loading={loading}
			 getDataObject={getDataObject}
		 />
		 {
			loading ? <div className='home' />:
	       <Box sx={box_styles_}>
		      <Typography sx={header} variant="h4">
		         Restaurants
		      </Typography>
			  <Grid 
				sx={{ flexGrow: 1 }}
				container
				spacing={1}
				columns={12}
				>
					{restaurants_data?.map((restaurant) => {
						return (
							<Grid key={restaurant?.id} item lg={4} md={4} sm={6} xs={12}>
								<SingleRestuarant 
								   restaurant={restaurant}
								   viewSingleRestuarant={viewSingleRestuarant}
								/>
							</Grid>
					   )}
					 )}
					

	            </Grid>
           </Box>
		}
		{
		  no_results_found && !loading && restaurants_data === null ? 
		  <div className='home'>
			<Box sx={box_styles_}>
				<Typography sx={header} variant="h5">
					No restaurants found.
				</Typography>
			</Box>
		  </div>: null
		}
        </Grid>
   </Grid>
  );
}

export default SearchRsults

