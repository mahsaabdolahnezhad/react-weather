import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';

export default function WeatherIcon(props){
    const codeMapping ={
        "clear-sky-day":"CLEAR_DAY",
        "clear-sky-night":"CLEAR_NIGHT",
        "few-clouds-day":"PARTLY_CLOUDY_DAY",
        "few-clouds-night":"PARTLY_CLOUDY_NIGHT",
        "scattered-clouds-day":"PARTLY_CLOUDY_DAY",
        "scattered-clouds-night":"PARTLY_CLOUDY_NIGHT",
        "broken-clouds-day":"CLOUDY",
        "broken-clouds-night":"CLOUDY",
        "shower-rain-day":"RAIN",
        "shower-rain-night":"RAIN",
        "rain-day":"RAIN",
        "rain-night":"RAIN",
        "snow-day":"SNOW",
        "snow-night":"SNOW",
        "thunderstorm-day":"WIND",
        "thunderstorm-night":"WIND",
        "mist-day":"FOG",
        "mist-night":"FOG"

    };
    return (  <ReactAnimatedWeather
        icon={codeMapping[props.code]}
        color="#ffd5be"
        size={props.size}
        animate={true}
      />);
}