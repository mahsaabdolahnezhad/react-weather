import React , {useState} from "react";
import "./Weather.css"
import axios from "axios";

export default function Weather(){
    const [ready , setReady] = useState(false);
    const [temprature , setTemprature] = useState("null");
    function handleResponse(response){
        console.log(response.temprature);
        setTemprature(response.temprature.current);
        setReady(true);
    }
 
    if (ready){
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
        <h1>Tehran</h1>
        <ul>
            <li>
             Sunday 1:00   
            </li>
            <li>
            Sunny
            </li>
        </ul>
        <div className="row mt-3">
            <div className="col-6">
                <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="partly cloudy"/> 
                <span className="temprature">{temprature}</span>
                <span className="unit">℃</span>
            </div>
            <div className="col-6">
                <ul>
                    <li>
                        Precipitation: 15%
                    </li>
                    <li>
                        Humidity: 72%
                    </li>
                    <li>
                        Wind: 13 km/h
                    </li>
                </ul>
            </div>
        </div>
        
        
        </div>)
    }
    else{
        const apiKey="6a0e728f9903t4d8c372boc76730411b";
        let city="Tehran";
        let apiUrl =`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);

        return "Loading..."
    }
    ;
}