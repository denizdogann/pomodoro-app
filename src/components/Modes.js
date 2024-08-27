import React, { useEffect, useState } from 'react';
import styles from './modes.modules.css'

function Modes( {setMode, mode} ) {

    const activeMode = (e) => {
        const modes = document.querySelectorAll(".mode-button")
        modes.forEach(mode => {
            mode.classList.remove("active")
        })
        e.target.classList.add("active")
        setMode(e.target.name)
    }
    return ( 
        <div className='modes-display'>
            <button name='pomodoro' id='pomodoro-btn' className='mode-button active'  onClick={(e) => activeMode(e) }>pomodoro</button>
            <button name="short-break" id='short-break-btn' className='mode-button' onClick={ (e) => activeMode(e)} >short break</button>
            <button name="long-break" id='long-break-btn' className='mode-button' onClick={(e) => activeMode(e)}>long break</button>
        </div>
     );
}

export default Modes;