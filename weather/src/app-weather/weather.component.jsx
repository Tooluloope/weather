import React from 'react'
import './weather.style.css'


const Weather = () => {

    return(
        <div className='weather'>
            <div className='city-head'> Lagos, Nigeria </div>
            <div className='weather-logo'></div>
            <h2 className='temp' >  35 &deg;</h2>
            <div className='temp-range'>
                <span className='temp-min'>35 &deg;</span> <span className='temp-max'>35 &deg;</span> 
            </div>
            <h2 className='weather-desc'>Cloudy</h2>
        
        </div>
    )
}

export default  Weather;