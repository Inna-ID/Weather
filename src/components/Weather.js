import React from 'react';

const Weather = props => (
        <div className="weather-info">
            {props.city ?
            <React.Fragment>
            <p>Location: {props.city}, {props.country}</p>
            <p>Temperature: {props.temperature}°</p>
            <p>Humidity: {props.humidity}%</p>
            <p>Sunrise: {props.sunrise}</p>
            <p>Sunset: {props.sunset}</p>

            </React.Fragment> :
            <React.Fragment>
                <p>{props.error}</p>
            </React.Fragment>
            }
        </div>
)

export default Weather;