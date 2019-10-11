import React, {Component} from 'react';

class Weather extends Component {
    render() {

        //let info = <p>Location</p>;

        return(
            <div className="weather-info">
                {this.props.city ?
                <React.Fragment>
                <p>Location: {this.props.city}, {this.props.country}</p>
                <p>Temperature: {this.props.temperature}°</p>
                <p>Humidity: {this.props.humidity}%</p>
                <p>Sunrise: {this.props.sunrise}</p>
                <p>Sunset: {this.props.sunset}</p>

                </React.Fragment> :
                <React.Fragment>
                    <p>{this.props.error}</p>
                </React.Fragment>
                }
            </div>
        )
    }
}

export default Weather;