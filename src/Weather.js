import React , {useState} from "react";
import "./Weather.css"
import axios from "axios";

export default function Weather(props){
    const [weatherData , setWeatherData] = useState({ready: false});
    function handleResponse(response){
        setWeatherData({
        ready : true,
        temprature: response.data.temperature.current,
        humidity: response.data.temperature.humidity,
        wind:response.data.wind.speed,
        date:"Tuesday 12:00",
        city:response.data.city,
        description: response.data.condition.description,
        iconUrl:"https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
        });
       
    }
 
    if (weatherData.ready){
    return (<div className="Weather">
        <form>
            <div className="row">
                <div className="col-9">
            <input 
            type="Search" 
            placeholder="enter a city..."
            className="form-control"
            autoFocus="on"
            />
            </div>
            <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary w-100"/>
            </div>
            </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
            <li>
            {weatherData.date}  
            </li>
            <li className="text-capitalize">
            {weatherData.description}
            </li>
        </ul>
        <div className="row mt-3">
            <div className="col-6">
                <img src={weatherData.iconUrl} alt={weatherData.description}/> 
                <span className="temprature">{Math.round(weatherData.temprature)}</span>
                <span className="unit">℃</span>
            </div>
            <div className="col-6">
                <ul>
                    <li>
                        Humidity: {weatherData.humidity}%
                    </li>
                    <li>
                        Wind: {weatherData.wind} km/h
                    </li>
                </ul>
            </div>
        </div>
        
        
        </div>)
    }
    else{
        const apiKey="6a0e728f9903t4d8c372boc76730411b";
        let apiUrl =`https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);

        return "Loading..."
    };
}