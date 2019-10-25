import React from 'react';

const WeatherDisplay = (props) => {
 navigator.geolocation.getCurrentPosition( position => {
  

  console.log(position.coords.latitude)
})
 return (
  <div>
   
  </div>
 );
};

export default WeatherDisplay;