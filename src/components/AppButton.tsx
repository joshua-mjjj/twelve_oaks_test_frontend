import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const footer_logo = (height) => { 
  return {
    height: height ? `${height}px` : '',
    borderColor: '#2ABB98',
    justifyContent: 'center',
    color: '#2ABB98',
    textTransform: 'none',
    '&:hover': {
      borderColor: '#2ABB98',
      boxShadow: 'none',
    },
   }
  }

interface ButtonProps {
  callback: (param: any) => void // Button initiates
  label?: string, 
  height?: number
}

const AppButton: React.FC<ButtonProps> = ({ callback, label, height }) => {

  return (
    <Stack spacing={2} direction="row">
      <Button 
         variant="outlined"
         disableRipple
         onClick={(e) => callback(e)}
         sx={footer_logo(height)}
         >
         {label}
       </Button>
    </Stack>
  );
}

export default  AppButton