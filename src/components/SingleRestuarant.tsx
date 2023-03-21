import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import { Restaurant } from '../interfaces/restaurants';

const card_styles = { maxWidth: 400, marginBottom: '20px', borderRadius: '20px', cursor: 'pointer' }
const sub_header = { color: 'grey', fontSize: '12px', fontFamily: 'WorkSans-Regular' } 
const header = { color: 'black', fontSize: '20px', fontFamily: 'WorkSans-Medium' } 

interface RecipeReviewCardProps {
  restaurant: Restaurant;
  viewSingleRestuarant: (restaurant_: Restaurant) => void
}

const RecipeReviewCard: React.FC<RecipeReviewCardProps> = ({ restaurant, viewSingleRestuarant }) => {
  const handleRoute = () => {
    viewSingleRestuarant(restaurant)
  }

  return (
    <div onClick={handleRoute}>
      <Card sx={card_styles} >
        <CardHeader
          title={<Typography sx={header}>{restaurant?.name}</Typography>}
          subheader={`${restaurant.location.city},  ${restaurant.location.address1}`}
          subheaderTypographyProps={sub_header}  
          name="restaurant_header" 
        />
        <CardMedia
          component="img"
          height="194"
          image={restaurant.image_url}
          alt="res image"
        />
      </Card>
    </div>
  );
}

export default RecipeReviewCard