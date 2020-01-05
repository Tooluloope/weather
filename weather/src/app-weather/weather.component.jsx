import React from 'react'
import './weather.style.css'


const Weather = ({city,country,temp,maxTemp ,minTemp,icon,desc }) => {
    if (country && city) {
        return(
            <div className='weather'>
                <div className='city-head'> {city}, {country} </div>
                <i className={`wi ${icon} display-1`} />
                <h2 className='temp' >Current Temp: {temp} &deg;</h2>
                <div className='temp-range'>
                    <span className='temp-min'>Min: {minTemp} &deg;</span> <span className='temp-max'>Max: {maxTemp} &deg;</span> 
                </div>
                <h2 className='weather-desc'>{desc}</h2>
        
            </div>
        )
    } else {
        return null
    }
}

export default  Weather;