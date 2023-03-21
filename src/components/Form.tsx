import * as React from 'react';
import { useRef, MouseEvent, KeyboardEvent } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import AppButton from './AppButton'

const paper_1 = { p: '2px 4px', display: 'flex', alignItems: 'center', width: 'auto', marginBottom: 2 }
const paper_2 = { p: '2px 4px', display: 'flex', alignItems: 'center', width: 'auto', marginBottom: '20px' }

interface FormProps {
  sendDataObject: (data: Object) => void
}

const Form: React.FC<FormProps> = ({ sendDataObject }) => {
  
  const locationRef = useRef<HTMLInputElement>(null)
  const searchRef = useRef<HTMLInputElement>(null)

  const handleSearch = (e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>): void => {
    e.preventDefault()
    if(locationRef?.current?.value && searchRef?.current?.value){
      const search_object = {
        'location' : locationRef?.current?.value,
        'search_term' : searchRef?.current?.value
      }
      sendDataObject(search_object)
    }
  }

  return (
  	<div style={{ alignItems: 'center' }} >
  	 <Paper
       component="form"
       sx={paper_1}
      >
      <IconButton sx={{ p: '10px' }} aria-label="menu">
        <FmdGoodIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Location..."
        name="location"
        inputRef={locationRef}
        inputProps={{ 'aria-label': 'location' }}
      />
    </Paper>

    <Paper
      component="form"
      sx={paper_2}
      >
      <IconButton sx={{ p: '10px' }} aria-label="menu">
        <RestaurantIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="What would you like to eat..."
        inputRef={searchRef}
        name="search term"
        inputProps={{ 'aria-label': 'search term' }}
      />
    </Paper>
     <AppButton 
        callback={handleSearch}
        label={"Search restaurants"}
     />
  	</div>
    
  );
}

export default Form
