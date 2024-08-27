import './App.css';
import gearIcon from './assets/gear-icon.svg'
import React, { useEffect, useRef, useState } from 'react';
import Timer from './components/Timer';
import Modes from './components/Modes';
import Modal from './components/Modal';
import SettingsForm from './components/SettingsForm';


function App() {

  const [mode, setMode] = useState("pomodoro")
  const [showModal, setShowModal] = useState(false)

  const [timerSettings, setTimerSettings] = useState({
    "pomodoro":25,
    "short-break":5,
    "long-break":15
  })


  const handleClose = () => {
    setShowModal(false)
  }

  
  
  
  return (

    <div className={'App ' + mode} >
      
      <div className='main-content'>
        <Modes setMode={setMode} mode={mode}></Modes>
        {mode === "pomodoro" && <Timer mode="pomodoro" totalMinutes={timerSettings["pomodoro"]} ></Timer>}
        {mode === "short-break" && <Timer mode="short-break" totalMinutes={timerSettings["short-break"]} ></Timer>}
        {mode === "long-break" && <Timer mode="long-break" totalMinutes={timerSettings["long-break"]} ></Timer>}
        {showModal && <Modal handleClose={handleClose}>
            <SettingsForm handleClose={handleClose} timerSettings={timerSettings} setTimerSettings={setTimerSettings}></SettingsForm> 
        </Modal>}
      </div>


      <button className='settings-btn' onClick={() => setShowModal(true)}>
        <img src={gearIcon} alt='settings'></img>
      </button>
    </div>


  );
}

export default App;
