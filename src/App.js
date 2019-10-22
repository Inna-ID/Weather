import React, { Component } from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';
import './App.css';

const apiKey = 'e1df1fc3a72e0ced10d2e8bac9563a73';

class App extends Component {
  state = {
    city: undefined,
    country: undefined,
    temperature: undefined,
    humidity: undefined,
    cloudiness: undefined,
    icon: undefined,
    sunrise: undefined,
    sunset: undefined,
    windSpeed: undefined,
    windDeg: undefined,
    error: undefined
  }

  gettingWeather = async (e) => {
    e.preventDefault();
    //в таргет будет инфа о форме, тк этот метод вызывается на форме
    const city = e.target.elements.city.value;
    const apiUrl = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const data = await apiUrl.json(); // перевод полученной инфы в формат json
    console.log(data);

    if(data.name) {
      ///wind derection
      const setWidDerection = deg => {
        switch(true) {
          case (deg >= 350 && deg <= 10): return 'Eastern ⭠';
          case (deg > 10 && deg < 80): return 'Northeastern ⭩';
          case (deg >= 80 && deg <= 100): return 'Northern ⭣';
          case (deg > 100 && deg < 170): return 'Northwestern ⭨';
          case (deg >= 170 && deg <= 190): return 'Western ⭢';
          case (deg > 190 && deg < 260): return'Southwestern ⭧';
          case (deg >= 260 && deg <= 280): return 'Southern ⭡';
          case (deg > 280 && deg < 350): return 'Southeastern ⭦';
          default: return '';
        }
      }

      // sunrise and sunset
      let dateSunrise = new Date();
      let dateSunset = new Date();
      dateSunrise.setTime(data.sys.sunrise * 1000);
      dateSunset.setTime(data.sys.sunset * 1000);

      const setZero = time => (
        time < 10 ? '0' + time : time
      )     

      let sunriseHours = setZero(dateSunrise.getHours());
      let sunriseMinutes = setZero(dateSunrise.getMinutes());
      let sunriseSeconds = setZero(dateSunrise.getSeconds());
      let sunriseTime = `${sunriseHours} : ${sunriseMinutes} : ${sunriseSeconds}`;

      let sunsetHours = setZero(dateSunset.getHours());
      let sunsetMinutes = setZero(dateSunset.getMinutes());
      let sunsetSeconds = setZero(dateSunset.getSeconds());
      let sunsetTime = `${sunsetHours} : ${sunsetMinutes} : ${sunsetSeconds}`;
      

      this.setState({
        city: data.name,
        country: data.sys.country,
        temperature: data.main.temp,
        humidity: data.main.humidity,
        cloudiness: data.weather[0].description,
        icon: data.weather[0].icon,
        sunrise: sunriseTime,
        sunset: sunsetTime,
        windSpeed: data.wind.speed,
        windDeg: setWidDerection(data.wind.deg),
        error: ''
      });
    } else {
      this.setState({
        city: undefined,
        country: undefined,
        temperature: undefined,
        humidity: undefined,
        cloudiness: undefined,
        icon: undefined,
        sunrise: undefined,
        sunset: undefined,
        windSpeed: undefined,
        windDeg: undefined,
        error: data.message
      });
    }
  }

  render() {
    return (
      <div className="wrapper sky">
        <div className="stars"></div>
        <div className="mountains"></div>
        <div className="main">
        <div className="container">
                <Titles/>
                <Form weatherMethod={this.gettingWeather}/>
                <Weather
                    city={this.state.city}
                    country={this.state.country}
                    temperature={this.state.temperature}
                    humidity={this.state.humidity}
                    cloudiness={this.state.cloudiness}
                    icon={this.state.icon}
                    sunrise={this.state.sunrise}
                    sunset={this.state.sunset}
                    windSpeed={this.state.windSpeed}
                    windDeg={this.state.windDeg}
                    error={this.state.error}
                />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
