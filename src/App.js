import React, { Component } from 'react';
//import logo from './logo.svg';
import Info from './components/Info';
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
    sunrise: undefined,
    sunset: undefined,
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
      var sunset = data.sys.sunset;
      var date = new Date();
      date.setTime(sunset);
      var sunset_date = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

      this.setState({        
        city: data.name,
        country: data.sys.country,
        temperature: data.main.temp,
        humidity: data.main.humidity,
        sunrise: data.sys.sunrise,
        sunset: sunset_date,
      });
    } else {
      this.setState({
        error: data.message
      });
    }
  }

  render() {
    return (
      <div>
        <Info/>
        <Form weatherMethod={this.gettingWeather}/>
        <Weather
            city={this.state.city}
            country={this.state.country}
            temperature={this.state.temperature}
            humidity={this.state.humidity}
            sunrise={this.state.sunrise}
            sunset={this.state.sunset}
            error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
