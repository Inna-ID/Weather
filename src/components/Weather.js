import React from 'react';

const Weather = props => (
        <div className="weather-info">
            {props.city ?
            <React.Fragment>
            {/* <p><span className="key">Location:</span> {props.city}, {props.country}</p> */}
            <div className="main-info">
            <p className="location">{props.city}, {props.country}</p>
            <p className="temperature">{props.temperature}°<span className="degrees-types">C</span> </p>
            </div>
            <p><span className="key">Humidity:</span> {props.humidity}%</p>
            <p><span className="key">Cloudiness:</span> {props.cloudiness}</p>
            <p><span className="key">Wind speed:</span> {props.windSpeed} m/s</p>
            <p><span className="key">Wind direction:</span> {props.windDeg}</p>
            <p><span className="key">Sunrise:</span> {props.sunrise}</p>
            <p><span className="key">Sunset:</span> {props.sunset}</p>
            </React.Fragment> :
            <React.Fragment>
                <p>{props.error}</p>
            </React.Fragment>
            }
        </div>
)

export default Weather;