import React, { useState, useEffect} from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";
import axios from "axios";


export default function WeatherForecast(props){
    let [loaded , setLoaded]= useState (false);
    let [forecast , setForecast]= useState(null);
   

    
    useEffect (() => {
        setLoaded(false);
        } , [props.city] )
        

    function handleResponse(response){
    setForecast(response.data.daily);
    setLoaded(true);
    }

    if(loaded){
        console.log(forecast[0].temperature);
        return(
            <div className="WeatherForecast">
             <div className="row">
                {forecast.map(function (dailyForecast , index){
                    if (index <5){
                    return(
                        <div className="col" key={index}>
                        <WeatherForecastDay data={dailyForecast} />
                         </div>
                         
                    )
                    } else {
                        return null;
                    }
                } )}
        
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