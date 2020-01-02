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
      error: false
    }

    this.weatherIcon = {
      Thunderstorm: "wi-thunderstorm",
      Drizzle: "wi-sleet",
      Rain: "wi-storm-showers",
      Snow: "wi-snow",
      Atmosphere: "wi-fog",
      Clear: "wi-day-sunny",
      Clouds: "wi-day-fog"
    };
  }

  get_WeatherIcon(icons, iconID) {
    switch (true) {
      case iconID >= 200 && iconID < 232:
        this.setState({ icon: icons.Thunderstorm });
        break;
      case iconID >= 300 && iconID <= 321:
        this.setState({ icon: icons.Drizzle });
        break;
      case iconID >= 500 && iconID <= 521:
        this.setState({ icon: icons.Rain });
        break;
      case iconID >= 600 && iconID <= 622:
        this.setState({ icon: icons.Snow });
        break;
      case iconID >= 701 && iconID <= 781:
        this.setState({ icon: icons.Atmosphere });
        break;
      case iconID === 800:
        this.setState({ icon: icons.Clear });
        break;
      case iconID >= 801 && iconID <= 804:
        this.setState({ icon: icons.Clouds });
        break;
      default:
        this.setState({ icon: icons.Clouds });
    }
  }

  getWeather = async (e) => {
    e.preventDefault()

    const country = e.target.elements.country.value
    const city = e.target.elements.city.value

    if (country && city) {
      const api_key = '95b716c4f4eb1b64646c7d24b6626d58'

      try {
        const api_data = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${api_key}`)
        const api_data_json = await api_data.json()

        this.setState({
          country: api_data_json.sys.country,
          region: api_data_json.name,
          temp: api_data_json.main.temp,
          maxTemp: api_data_json.main.temp_max,
          desc: api_data_json.weather[0].description,
          minTemp: api_data_json.main.temp_min,
        })
  
        this.get_WeatherIcon(this.weatherIcon, api_data_json.weather[0].id);
  
        
      } catch (error) {
        this.setState({error:true})
      }

     
    }
  }

  
  render() {
    const {country, region, temp, maxTemp, minTemp, desc,icon, error} = this.state
    return (
      
      <div className="App">
        <Form getweather = {this.getWeather} error = {error}  />
        <Weather
        city = {region}
        country = {country}
        temp = {temp}
        maxTemp = {maxTemp}
        minTemp = {minTemp}
        icon = {icon}
        desc = {desc}
        />
      </div>
    );
  }
}

export default App;
