import React from 'react'
import './form.style.css'

const Form  = (props) => {

    return(
        <div className='form'>
           { props.error ? 
                <div className='error-pan'>
                    <h3 className='error-text'>Input a valid Country and City</h3>
                </div>
             : null
            }
            <form onSubmit = {props.getweather}>
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

export default Form;