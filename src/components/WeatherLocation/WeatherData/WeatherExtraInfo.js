import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'
const WeatherExtraInfo=({humidity, wind})=>(
    <div className="weatherextrainfocont">
        <span className="extrainfortex">
            {`humedad ${humidity}% - `}
        </span>
        <span className="extrainfortex">
            {`viento ${wind} `}
        </span>
    </div>
);
WeatherExtraInfo.propTypes ={
    humidity:PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
};
export default WeatherExtraInfo;