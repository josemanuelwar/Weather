import React,{Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import {
    CLOUDY,
} from './../../constants/weather';
const location ="Buenos Aires ,ar";
const api_key= "89a05db6f70ada790b77b7e93e317148";
const url_base_weather='http://api.openweathermap.org/data/2.5/weather';

const api_weather=`${url_base_weather}?q=${location}&appid=${api_key}`;
const data  =   {
    temperature: 12,
    weatherState:  CLOUDY,
    humidity: 10,
    wind: "10k/s"
}



class Weatherlocation extends Component {

    constructor(){
        super();
        this.state = {
            city: 'Ciudad de Puebla',
            data:data,
        };
    }

    getWeatherState = weather_data =>{
        return CLOUDY;
    }

    getData =weather_data =>{
        const { humidity,temp } = weather_data.main;
        const { speed } = weather_data.wind;
        const weatherState=this.getWeatherState(weather_data);
        const data ={
            humidity,
            temperature:temp,
            weatherState,
            wind:`${speed} m/s`,
        }
        return data;
    }

    handleUpdateClick = () => {

        fetch(api_weather).then( resolver =>{
            return resolver.json();
        }).then(data => {
            const newWeather =  this.getData(data);
           this.setState({
                data:newWeather
            });
        });
    }
    render(){
        const { city,data } = this.state;
        return(
                <div className="weatherlocationcont">
                    <Location city={city}></Location>
                    <WeatherData data={data}></WeatherData>
                    <button onClick={this.handleUpdateClick}>Actulizar</button>
                </div>
        );
    }
}


export default Weatherlocation;
