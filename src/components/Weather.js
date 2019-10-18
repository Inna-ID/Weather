import React from 'react';

const Weather = props => (
        <div className="weather-info">
            {props.city ?
            <React.Fragment>
            <p><span className="val">Location:</span> {props.city}, {props.country}</p>
            <p><span className="val">Temperature:</span> {props.temperature}°</p>
            <p><span className="val">Humidity:</span> {props.humidity}%</p>
            <p><span className="val">Cloudiness:</span> {props.cloudiness}</p>
            <p><span className="val">Wind speed:</span> {props.windSpeed} m/s</p>
            <p><span className="val">Sunrise:</span> {props.sunrise}</p>
            <p><span className="val">Sunset:</span> {props.sunset}</p>
            </React.Fragment> :
            <React.Fragment>
                <p>{props.error}</p>
            </React.Fragment>
            }
        </div>
)

export default Weather;