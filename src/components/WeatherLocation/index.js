import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
const Weatherlocation = () =>(
    <div className="weatherlocationcont">
        <Location city={'Cuidad de Puebla'}></Location>
        <WeatherData></WeatherData>
    </div>
);

export default Weatherlocation;
