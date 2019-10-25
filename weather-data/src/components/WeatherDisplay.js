import React, {useEffect}from 'react';
import {connect} from "react-redux"
import {getLocation} from "../actions/weather"


function WeatherDisplay(props){

 useEffect(() => {
  props.getLocation()
 },[props])

 return (
  <div>
   
  </div>
 );
};
function mapStateToProps(state) {
return {
 isLoading: state.weather.isLoading,
 weatherData: state.weather.weatherData,
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