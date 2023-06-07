import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import axios from 'axios'

export default function Homepage() {

   const moviesApi = "https://api.tvmaze.com/search/shows?q=all";
   const [data, setData] = useState([])
 
   useEffect(() => {
     getMoviesData(moviesApi);
   }, [])
 
   const getMoviesData = async (api) => {
     const { data } = await axios.get(api);
     setData(data)
   }
  
   return (
      <div>
         <Cards data={data}/>
      </div>
   )
}
