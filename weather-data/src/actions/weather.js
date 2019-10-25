import axios from "axios";
import { ReadStream } from "tty";

export const GET_LOCATION_START = "GET_LOCATION_START";
export const GET_LOCATION_SUCCESS = "GET_LOCATION_SUCCESS";
export const GET_LOCATION_ERROR = "GET_LOCATION_ERROR";


export function getLocation() {
const lat = ""
const long = ""

 return dispatch => {
  dispatch({type: GET_LOCATION_START})
  
  navigator.geolocation.getCurrentPosition( position => {
   lat = position.coords.latitude
   long = position.coords.longitude

 })
 axios
 .get(`https://www.metaweather.com/api/location/search/?lattlong=${lat},${long}`)
 .then(res => {
  dispatch({type: GET_LOCATION_SUCCESS, payload: res.data})
 })
 .catch(err => {
  dispatch({type: GET_LOCATION_ERROR, payload: err})
 })

  }
 
}