import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import Grid from '@mui/material/Grid';
import { useState, MouseEvent, KeyboardEvent } from 'react';
import AppButton from './AppButton'
import Loader from './Loader';

const container_grid = { flexGrow: 1, paddingLeft: '20px' , marginTop: '5px', paddingRight: '20px'}
const inner_grid = { display: 'flex', alignItems: 'center', width: 'auto' }

interface FormResultsProps {
	location : string | null
	search_term : string | null
	loading: boolean
	getDataObject:  (data: Object) => void
}

const FormResults: React.FC<FormResultsProps> = ({ 
	 location , 
	 search_term, 
	 loading, 
	 getDataObject
}) => {
  
  const [location_init, setLocation] = useState<string | null>(location)
  const [search_init, setSearch] = useState<string | null>(search_term)
  
  const handleSearchAgain = (e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>): void => {
    e.preventDefault()
    if(location_init && search_init){
		const search_object = {
			'location' : location_init,
			'search_term' : search_init
		  }
		getDataObject(search_object)
    }
  }

  return (
  	<div style={{ alignItems: 'center' }} >
  	<Grid 
	     sx={container_grid}
	     container
	     spacing={2}
	     columns={12}
	    >
	    <Grid item lg={5} md={5} sm={5} xs={12}>
	      <Paper
	        component="form"
	        sx={inner_grid}
	      >
	      <IconButton disableRipple sx={{ p: '10px' }} aria-label="menu">
	        <FmdGoodIcon />
	      </IconButton>
	      <InputBase
	        sx={{ ml: 1, flex: 1 }}
	        placeholder="Location..."
			defaultValue={location_init}
			name="location"
			onChange={(e) => setLocation(e.target.value)}
	        inputProps={{ 'aria-label': 'location' }}
	      />
	    </Paper>
        </Grid>

        <Grid item lg={6} md={5} sm={5} xs={12}>
	        <Paper
		      component="form"
		      sx={inner_grid}
		      >
		      <IconButton disableRipple sx={{ p: '10px' }} aria-label="menu">
		        <RestaurantIcon />
		      </IconButton>
		      <InputBase
		        sx={{ flex: 1 }}
		        placeholder="What would you like to eat..."
				onChange={(e) => setSearch(e.target.value)}
				defaultValue={search_init}
				name="search term"
		        inputProps={{ 'aria-label': 'search term' }}
		      />
		    </Paper>
        </Grid>

        <Grid item lg={1} md={2} sm={2} xs={2}>
		   <AppButton 
			  callback={handleSearchAgain}
			  label={"Search "}
			  height={45}
		   />
        </Grid>
  	 </Grid>
	 <div className='line'/>
	 {loading ? <Loader /> : null}
   </div>
    
  );
}

export default FormResults
