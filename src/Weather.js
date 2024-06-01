import React , {useState} from "react";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";

export default function Weather(props){
    const [weatherData , setWeatherData] = useState({ready: false});
    let [city , setCity] = useState (props.defaultCity);
    function handleResponse(response){
        setWeatherData({
        ready : true,
        temprature: response.data.temperature.current,
        humidity: response.data.temperature.humidity,
        wind:response.data.wind.speed,
        date: new Date(response.data.time * 1000),
        city:response.data.city,
        description: response.data.condition.description,
        icon: response.data.condition.icon,
        });
       
    };
    function search(){
        const apiKey="6a0e728f9903t4d8c372boc76730411b";
        let apiUrl =`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
        
    };
    function handleSubmit(event){
    event.preventDefault();
    search(city);
    };
    function handleCityChange(event){
    setCity(event.target.value);
    };
 
    if (weatherData.ready){
    return (<div className="Weather">
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-9">
            <input 
            type="Search" 
            placeholder="enter a city..."
            className="form-control"
            autoFocus="on"
            onChange={handleCityChange}
            />
            </div>
            <div className="col-3">
            <input type="submit" value="Search" className="btn w-100 button"/>
            </div>
            </div>
        </form>
        <WeatherInfo data={weatherData}/>   
        </div>)
    }
    else{
        search();
        return "Loading..."
    };
}