import React from 'react'
import './form.style.css'




const Forms  = ({error, getweather, mode}) => {

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
                     Country:
                     <input type="text" name="country" />
                </label>
                <label>
                     City:
                     <input type="text" name="city" />
                </label>
                <div className="btn-parent">
                 <button className="btn-get-weather">Get Weather</button>
              </div>
            </form>
        
        </div>
    )
}

export default Forms;