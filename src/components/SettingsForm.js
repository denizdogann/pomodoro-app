import React, { useState, useEffect, useRef } from 'react';
import styles from './settingsform.modules.css'

function SettingsForm( {timerSettings, setTimerSettings, handleClose} ) {


    const pomodoro = useRef( timerSettings["pomodoro"] )
    const shortBreak = useRef( timerSettings["short-break"] )
    const longBreak = useRef( timerSettings["long-break"] )
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const customSettings = {
            "pomodoro" : pomodoro.current.value,
            "short-break" : shortBreak.current.value,
            "long-break" : longBreak.current.value
        }
        setTimerSettings(customSettings)
        resetForm()
    }
    const resetForm = () => {
        pomodoro.current.value = 99
        shortBreak.current.value = 31
        longBreak.current.value = 88
        handleClose();
    }

    return ( 
        <div>
            <form className="new-settings-form" onSubmit={ handleSubmit }>
                <label>
                    <span>pomodoro:</span>
                    <input type="number"  required ref={pomodoro}></input>
                </label>
                <label>
                    <span>short break:</span>
                    <input type="number" required ref={shortBreak}></input>
                </label>
                <label>
                    <span>long break:</span>
                    <input type="number"  required ref={longBreak}></input>
                </label>
                <button>submit</button>
            </form>
        </div>
     );
}

export default SettingsForm;