import React, { useState, useEffect } from 'react';
import './App.css';
import Weather from './app-weather/weather.component';
import '@fortawesome/fontawesome-free/css/fontawesome.min.css'
import Form from './app-weather/form.component';
import "weather-icons/css/weather-icons.css";
import Nav from './app-weather/nav.component';
import { getMode, weatherIcon, get_WeatherIcon, convertToCelsius } from './app-weather/weather.utils';




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
      lat:undefined,
      lon:undefined
  }

  // Reducer
  // const reducer = (state, action) => {
  //   const {name, value} = action

  //   return {...state, [name]: value}
  // }

  // UseReducer Hook
  const [state, setState] = useState(initialState)

  // Forecast Data
  const [forecast, setForcast] = useState(null)

  // Darkmode state
  const [darkMode, setdarkMode] = useState(getMode())

// Set dark mode value'
const setMode = () => {
  console.log(darkMode)
  setdarkMode(!darkMode)
  console.log(darkMode)
  storeInLocalStorage()
}

// Store darkMode value in local storage
const storeInLocalStorage = () => {
  localStorage.setItem("dark", JSON.stringify(darkMode));
}



  // This gets the weather response and set state for the different states
  const getWeather = async (e) => {
    e.preventDefault()



    // Gets the value of Country and city from form.component
    const country = e.target.elements.country.value
    const city = e.target.elements.city.value

    // This would only run if both fields are filled else nothing would happen
    if (country && city) {

      // hide your API key, 
      // const api_key = process.env.REACT_APP_WEATHER_API_KEY

      // Gets the response and also returns an error if any
      try {
        const api_data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=95b716c4f4eb1b64646c7d24b6626d58`)
        const api_data_json = await api_data.json()

        setState({
          country: api_data_json.sys.country,
          region: api_data_json.name,
          temp: convertToCelsius(api_data_json.main.temp),
          maxTemp: convertToCelsius(api_data_json.main.temp_max),
          desc: api_data_json.weather[0].description,
          minTemp: convertToCelsius(api_data_json.main.temp_min),
          error:false, 
          icon:  get_WeatherIcon(weatherIcon, api_data_json.weather[0].id),
          lat: api_data_json.coord.lat,
          lon: api_data_json.coord.lon,
        })


      } catch (error) {
        console.log(error)
        setState({error:true})
      }

      
    }
  }


  // useEffect( () => {
  //   const {lat, lon} = state

  //   if (lat && lon) {
  //     const api_data =  fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt={5}&appid=95b716c4f4eb1b64646c7d24b6626d58`);
  //     const api_data_json =  api_data.json()
  //     console.log(api_data_json)
  //   }
    
  // }, [state])

  const {country, region, temp, maxTemp, minTemp, desc,icon, error} = state
    return (
      
      <div className={` ${darkMode ? 'dark-mode': 'light-mode'} App`}>
      <Nav mode = {darkMode}  getMode = {setMode}/>
        <Form mode = {darkMode} getweather = {getWeather} error = {error}  />
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