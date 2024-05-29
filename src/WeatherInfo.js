import React from "react";
import FormattedDate from "./FormattedDate";


export default function WeatherInfo(props){
   return( <div className="WeatherInfo">
    <h1>{props.data.city}</h1>
<ul>
   <li>
   <FormattedDate date={props.data.date}/>
   </li>
   <li className="text-capitalize">
   {props.data.description}
   </li>
</ul>
<div className="row mt-3">
   <div className="col-6">
       <img src={props.data.iconUrl} alt={props.data.description}/> 
       <span className="temprature">{Math.round(props.data.temprature)}</span>
       <span className="unit">℃</span>
   </div>
   <div className="col-6">
       <ul>
           <li>
               Humidity: {props.data.humidity}%
           </li>
           <li>
               Wind: {Math.round((props.data.wind)* 3.6)} km/h
           </li>
       </ul>
   </div>
</div>
</div> )
}