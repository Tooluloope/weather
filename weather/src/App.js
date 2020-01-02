import React, { Component } from 'react';
import './App.css';
import Weather from './app-weather/weather.component';
import '@fortawesome/fontawesome-free/css/fontawesome.min.css'
import Form from './app-weather/form.component';


class App extends Component {
  constructor() {
    super()
    this.state = {
      country: undefined,
      region: undefined,
      temp: undefined,
      maxTemp: undefined,
      icon: undefined,
      desc: undefined,
      minTemp: undefined,
    }
  }

  getWeather = async (e) => {
    e.preventDefault()

    const country = e.target.elements.country.value
    const city = e.target.elements.city.value

    if (country && city) {
      const api_key = '95b716c4f4eb1b64646c7d24b6626d58'
      const api_data = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${api_key}`)

      const api_data_json = await api_data.json()

      console.log(api_data_json)

    }
  }

  
  render() {
    return (
      
      <div className="App">
        <Form getweather = {this.getWeather} />
        <Weather />
      </div>
    );
  }
}

export default App;
