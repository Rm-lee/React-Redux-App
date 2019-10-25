import axios from "axios";


export const GET_LOCATION_START = "GET_LOCATION_START";
export const GET_LOCATION_SUCCESS = "GET_LOCATION_SUCCESS";
export const GET_LOCATION_ERROR = "GET_LOCATION_ERROR";
export const GET_WEATHER_DATA = "GET_WEATHER_DATA";


export function getLocation() {
 

 return dispatch => {
  dispatch({type: GET_LOCATION_START})
  navigator.geolocation.getCurrentPosition(passPos )
 
 function passPos(position){  
   let lat = position.coords.latitude
   const long= position.coords.longitude
   axios 
   .get(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?lattlong=${lat.toString()},${long.toString()}`)
   .then(res => {
  
      
      res.data.forEach(element => {
         
      axios.get(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${element.woeid}`)
      .then(res => {
      dispatch({type: GET_LOCATION_SUCCESS,payload:res.data})
      })
      .catch(err => {
      console.log(err)
      }) 
   });
 }
 )


 .catch(err => {
  dispatch({type: GET_LOCATION_ERROR, payload: err})
 })

  }
 }
}