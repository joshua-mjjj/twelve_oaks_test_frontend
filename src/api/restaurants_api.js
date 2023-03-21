import axios from "axios";

const api_url = 'http://127.0.0.1:8000/api'
export const get_restaurants_data = async (location, search_term) =>  {
      try {
         const res = await axios.get(`${api_url}/restaurants?location=${location}&search_term=${search_term}`)
         return res?.data?.data;
       } 
       catch (error) {
          // console.log(error)
          const errorObj = {
            'error' : true
          }
          return errorObj
      }
};