import React , {useState} from "react";

export default function WeatherTemperature(props){
    const [unit , setUnit] = useState("celsius");
    function convertToFahrenheit(event){
        event.preventDefault();
        setUnit("fahrenheit");
    }
    function convertToCelsius(event){
        event.preventDefault();
        setUnit("celsius");
    }
    function fahrenheit(){
        return (props.celsius * 9/5) +32;
    }
    if (unit === "celsius"){
        return(
            <span className="temprature">
               <span className="temprature">{Math.round(props.celsius)}</span>
               <span className="unit"> °C |<a href="" onClick={convertToFahrenheit}>°F</a></span>
            </span>
        )   
    } else {
     
        return(
            <span className="temprature">
               <span className="temprature">{Math.round(fahrenheit())}</span>
               <span className="unit"><a href="" onClick={convertToCelsius}> °C </a> |°F</span>
            </span>
        )   
    }
}