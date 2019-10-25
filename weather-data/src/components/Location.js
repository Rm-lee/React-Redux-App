import React from 'react';

function Location(props) {
let str = props.location.consolidated_weather[0].wind_speed.toString()
let weatherAbrv = props.location.consolidated_weather[0].weather_state_abbr
 return (
  <div className="location-weather">
   <h2>{props.location.title}</h2>

   <p>Conditions: {props.location.consolidated_weather[0].weather_state_name}</p>
   <img src={`https://www.metaweather.com/static/img/weather/${weatherAbrv}.svg`} />
   <p>Wind Direction: {props.location.consolidated_weather[0].wind_direction_compass}</p>
   <p>Wind Speed: {str.substring(0,5)}</p>
   <p>Min Temp: {parseInt(props.location.consolidated_weather[0].min_temp) * 1.8 + 32}</p>
   <p>Max Temp: {parseInt(props.location.consolidated_weather[0].max_temp) * 1.8 + 32}</p>



  </div>
 );
 }

export default Location
