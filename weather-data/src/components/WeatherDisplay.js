import React from 'react';
import {connect} from "react-redux"
import Location from "./Location"
import {getLocation} from "../actions/weather"



function WeatherDisplay(props){
 
 function currentLocale(){
 props.getLocation()
}
 return (

  <div className="weather-display">
   <p className="get-location">Get Current Location weather</p>
   <button className="btn" onClick={currentLocale}>Get Weather</button>
{props.isLoading ? (
        <div className="spinner" ></div>
      ) : props.weatherData && props.weatherData.map(place => <Location key={place.woeid} location={place}  />
  
   )}
  </div>
 );
};


function mapStateToProps(state) {
return {
 isLoading: state.weather.isLoading,
 weatherData: state.weather.weatherData,
 locationData: state.weather.locationData,
 error: state.weather.error
}
}
const mapDispatchToProps = {
getLocation
}
export default connect(
 mapStateToProps,
 mapDispatchToProps
 )(WeatherDisplay);