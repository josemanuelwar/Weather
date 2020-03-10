import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';

import {
    CLOUDY,
} from './../../../constants/weather';
const WeatherData =()=>(
    <div>
        <WeatherTemperature
            temperature={20}
            weatherState={CLOUDY}
        />
        <WeatherExtraInfo humidity={80} wind={"10 m/s"} />
    </div>
);
export default WeatherData;