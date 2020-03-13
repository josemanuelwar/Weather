import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import {
    CLOUD,
    CLOUDY,
    SUNNY,
    RAIN,
    SNOW,
    WINDAY,
} from './../../../constants/weather';
import './styles.css';
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
    const sizeIcos="4x";
    if (icon)
            return <WeatherIcons name={icon} className="wicon" size={sizeIcos}></WeatherIcons>
    else
            return <WeatherIcons name={"day-sunny"} className="wicon" size={sizeIcos}></WeatherIcons>
}
const WeatherTemperature=({temperature , weatherState})=>(
    <div className="weathertempeturecont">
        {
            getWeatherIcon(weatherState)
        }
        <span className='Temperature'>
            {`${temperature}`}
        </span>
        <span className='TemperatureType'>
            {`C°`}
        </span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature:PropTypes.number.isRequired,
    weatherState:PropTypes.string.isRequired,

};
export default WeatherTemperature;