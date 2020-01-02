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

    

    this.setState({
      country: e.target.val,
      region: undefined,
    })
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
