import React from 'react';
import WeatherIcons from 'react-weathericons';
import {
    CLOUD,
    CLOUDY,
    SUNNY,
    RAIN,
    SNOW,
    WINDAY,
} from './../constants/weather';
const icons ={
    [CLOUD]:  "cloud",
    [CLOUDY]: "cloudy",
    [SUNNY]:  "day-sunny",
    [RAIN]:   "rain",
    [SNOW]:   "snow",
    [WINDAY]:  "windy",
}
const getWeatherIcon = weatherState => {
    const icon = icons[weatherState];
    if (icon)
            return <WeatherIcons name={icon} size="2x"></WeatherIcons>
    else
            return <WeatherIcons name={"day-sunny"} size="2x"></WeatherIcons>
}
const WeatherTemperature=({temperature , weatherState})=>(
    <div>
        {
            getWeatherIcon(weatherState)
        }
        <span>{`${temperature} C°`} </span>
    </div>
);
export default WeatherTemperature;