import React, { Component } from 'react';
import './App.css';
import Weather from './app-weather/weather.component';
import '@fortawesome/fontawesome-free/css/fontawesome.min.css'
import Form from './app-weather/form.component';
import "weather-icons/css/weather-icons.css";
import Nav from './app-weather/nav.component';
import { getMode } from './app-weather/weather.utils';



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
      error: false,
      darkMode: getMode()
    }

    // Different weather icons for the project
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
 
// Set darkmode value
  setMode = () => {
    this.setState({darkMode: !this.state.darkMode})
    this.storeInLocalStorage()
  }
  // Store darkMode value in local storage
  storeInLocalStorage = () => {
    localStorage.setItem("dark", JSON.stringify(!this.state.darkMode));
  }


  // Get the correct weather icon to use based on the ID gotten from the API response
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

 
  // Since the temperature comes in kelvin from the API, this function converts it to Celcius
  convertToCelsius = (kelvin) =>Math.round(parseInt(kelvin) - 273.15)


    // This gets the weather response and set state for the different states
  getWeather = async (e) => {
    e.preventDefault()

    // Gets the value of Country and city from form.component
    const country = e.target.elements.country.value
    const city = e.target.elements.city.value

    // This would only run if both fields are filled else nothing would happen
    if (country && city) {

      // hide your API key, 
      const api_key = process.env.REACT_APP_WEATHER_API_KEY

      // Gets the response and also returns an error if any
      try {
        const api_data = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=95b716c4f4eb1b64646c7d24b6626d58`)
        const api_data_json = await api_data.json()

        this.setState({
          country: api_data_json.sys.country,
          region: api_data_json.name,
          temp: this.convertToCelsius(api_data_json.main.temp),
          maxTemp: this.convertToCelsius(api_data_json.main.temp_max),
          desc: api_data_json.weather[0].description,
          minTemp: this.convertToCelsius(api_data_json.main.temp_min),
          error:false
        })
        
        // set the icon state
        this.get_WeatherIcon(this.weatherIcon, api_data_json.weather[0].id);
  
        
      } catch (error) {
        this.setState({error:true})
      }

     
    }
  }

  
  render() {
    const {country, region, temp, maxTemp, minTemp, desc,icon, error, darkMode} = this.state
    return (
      
      <div className={` ${darkMode ? 'dark-mode': 'light-mode'} App`}>
      <Nav mode = {darkMode}  getMode = {this.setMode}/>
        <Form mode = {darkMode} getweather = {this.getWeather} error = {error}  />
        <Weather mode = {darkMode}
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
