import React, { useState } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props){
    let [loaded , setLoaded]= useState (false);
    let [forecast , setForecast]= useState(null);
    function handleResponse(response){
    setForecast(response.data.daily);
    setLoaded(true);
    }

    if(loaded){
        console.log(forecast[0].temperature);
        return(
            <div className="WeatherForecast">
             <div className="row">
                <div className="col">
                 <WeatherForecastDay data={forecast[0]} />
                  </div>
                  
        
             </div>
            </div>
        );

    }else{
        let apiKey ="6a0e728f9903t4d8c372boc76730411b";
        let city=props.city;
        let apiUrl =`https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
      return null;
    }

}