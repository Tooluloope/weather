import React, { Component } from 'react';
import './App.css';
import Weather from './app-weather/weather.component';
import '@fortawesome/fontawesome-free/css/fontawesome.min.css'
import Form from './app-weather/form.component';
import "weather-icons/css/weather-icons.css";
import Nav from './app-weather/nav.component';
import { getMode } from './app-weather/weather.utils';



const App = () => {

  // Initial state of variables
  const initialState = {
    country: undefined,
      region: undefined,
      temp: undefined,
      maxTemp: undefined,
      icon: undefined,
      desc: undefined,
      minTemp: undefined,
      error: false,
  }

  // Reducer
  const reducer = (state, action) => {
    const {name, value} = action

    return {...state, [name]: value}
  }

  // UseReducer Hook
  const [state, dispatch] = useReducer(reducer, initialState)

  // Darkmode state
  const [darkMode, setdarkMode] = useState(getMode())






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

export default App;
