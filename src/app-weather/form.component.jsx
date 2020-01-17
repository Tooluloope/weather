import React, { useState, useEffect } from 'react'
import './form.style.css'
import axios from 'axios';

const Form  = ({error, getweather, mode}) => {

    const [region, setRegion] = useState('')
    const [data, setData] = useState(null)

   

    const handleChange = (e) => {

        setRegion(e.target.value)        
    }
    useEffect(() => {
      if (region.length > 0) {
        axios.get(`https://restcountries.eu/rest/v2/name/${region}`)
        .then(res => {
            setData(res.data)

        })
      }
      
    }, [region])

    return(
        <div className={` ${mode ? 'dark-mode': 'light-mode'} form `}>
           { error ? 
                <div className='error-pan'>
                    <h3 className='error-text'>Input a valid Country and City</h3>
                </div>
             : null
            }
            <form onSubmit = {getweather}>
                <label>
                     City:
                     <input type="text" name="city" />
                </label>
                <label>
                     Country:
                     <input type="text" name="country" list="regions" onChange = {handleChange} />                 
                        <datalist id="regions">
                            { data ? data.map ( val =>  <option key={val.name}> {val.name}</option> ) : null}
                        </datalist>
                </label>
                
                <div className="btn-parent">
                 <button className="btn-get-weather">Get Weather</button>
              </div>
            </form>
        
        </div>
    )
}

export default Form;