import React from 'react'
import './nav.style.css'


const Nav = ({mode, getMode}) => {
    
    return(
        <nav className={` ${mode ? 'dark-mode': 'light-mode'} nav `}>
            <div className='toggle'>
            <span   className={`${mode ? "grey" : "yellow" } icon`}>☀︎</span>
                 
                <span >
                    <input checked={mode} onChange = {getMode} className="tgl tgl-light" id="cb1" type="checkbox"/>
                    <label className="tgl-btn" htmlFor="cb1"></label>
                </span>
                 
                 
                <span className={`${mode ? "slateblue" : "grey" } icon`}>☾</span>
            </div>
        </nav>
    )
}

export default Nav;