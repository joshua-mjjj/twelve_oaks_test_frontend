import React, { useState } from 'react';

// Interfaces
import { Restaurant } from '../interfaces/restaurants';

// Components 
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

// Containers
import HomeScreenContent from '../containers/HomeScreenContent'
import SearchResults from '../containers/SearchResults'
import SingleResturantDetail from '../containers/SingleResturantDetail';
import { get_restaurants_data } from '../api/restaurants_api';

const Home: React.FC = () => {
  const[app_state, setAppState] = useState<string>('welcome')
  const [loading, setLoading] = React.useState<boolean>(true)

  const[location, setLocation] = useState<string | null>(null)
  const[search_term, setSearchTerm] = useState<string | null>(null)
  const[single_restuarant, setSingleRestuarant] = useState<Restaurant | null>(null)
 
  const [no_results_found, setNoResultsFound] = React.useState<boolean>(true)
  const [restaurants_data, setRestaurantData] = React.useState<Restaurant[] | null>(null)
  
  const fetch_restaurants_data = (location, search) => {
    // console.log('Initiating search....')
    setLoading(true)
    setRestaurantData(null)
    get_restaurants_data(location, search).then((data) => {
        // console.log('Initial Search success...')
        if(data?.error){
          setRestaurantData(null)
          setNoResultsFound(true)
        }else {
          setRestaurantData(data)
          setNoResultsFound(false)
        }
        setLoading(false)
      })
   }

  const getDataObject = (data) => {
    setAppState('searching')
    setLocation(data.location)
    setSearchTerm(data.search_term)
    fetch_restaurants_data(data.location, data.search_term)
  }

  const RouteSingleRestuarant = (restaurant) => {
    if(restaurant){
      setAppState('detailView')
      setSingleRestuarant(restaurant)
    }
  }

  

  return (
    <>
      <NavBar />
      {app_state === 'welcome' ? 
        <HomeScreenContent 
          getDataObject={getDataObject}
        />
      : null}
      {app_state === 'searching' ? 
        <SearchResults 
          location={location}
          search_term={search_term}
          loading={loading}
          getDataObject={getDataObject}
          restaurants_data={restaurants_data}
          no_results_found={no_results_found}
          RouteSingleRestuarant={RouteSingleRestuarant}
        />
      : null}
       {app_state === 'detailView' ? 
        <SingleResturantDetail
          setAppState={setAppState}
          restaurant={single_restuarant}
        />
      : null}
      <Footer />
    </>
  );
}

export default Home;
