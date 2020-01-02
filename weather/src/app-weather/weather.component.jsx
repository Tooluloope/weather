import React from 'react'
import './weather.style.css'


const Weather = ({city,country,temp,maxTemp ,minTemp,icon,desc }) => {

    return(
        <div className='weather'>
            <div className='city-head'> {city}, {country} </div>
            <div className='weather-logo'></div>
            <h2 className='temp' >  {temp} &deg;</h2>
            <div className='temp-range'>
                <span className='temp-min'>{minTemp} &deg;</span> <span className='temp-max'>{maxTemp} &deg;</span> 
            </div>
            <h2 className='weather-desc'>{desc}</h2>
        
        </div>
    )
}

export default  Weather;