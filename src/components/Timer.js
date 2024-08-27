import { useEffect, useState } from 'react';
import useCountDown from 'react-countdown-hook';
import styles from './timer.modules.css'
import playIcon from '../assets/play-icon.svg'
import pauseIcon from '../assets/pause-icon.svg'
import resetIcon from '../assets/reset-icon.svg'


function Timer( props ) {
    const [isActive, setIsActive] = useState(false)
    const [isCounting, setIsCounting] = useState(false)

    const totalSeconds = props.totalMinutes * 60 * 1000;
    const [timeLeft, actions] = useCountDown(totalSeconds, 1000);
    const minutes = Math.floor((timeLeft / 1000) / 60)
    const seconds = (timeLeft / 1000) % 60;
   
    //TODO: BUTONLARIN İÇİNDEKİ FONKSİYONLARI MODULLEŞTİR

    return ( 
        <div className="timer__main">
            {!isActive && <h1 className={props.mode}>{props.totalMinutes.toString().padStart(2, "0")}:00 </h1>}
            {isActive && <h1 className={props.mode} >{minutes.toString().padStart(2, "0")}:{seconds.toString().padStart(2, "0")}</h1>}
          
            <div className={'timer__btn_box ' + props.mode}>
              {!isActive && <button  onClick={() => {actions.start(); setIsActive(true); setIsCounting(true)}}>
                <img src={playIcon} alt='play'></img>
              </button>}

              {(isActive && isCounting) && <button  onClick={() => {actions.pause(); setIsCounting(false)} }>
                <img src={pauseIcon} alt='pause'></img>
              </button>}
              {(isActive && !isCounting) && <button  onClick={()=> {actions.resume(); setIsCounting(true)}}>
                <img src={playIcon} alt='resume'></img>
              </button>}

              {isActive && <button onClick={()=> {actions.reset(); setIsActive(false); setIsCounting(false)}} >
                <img src={resetIcon} alt='reset'></img> 
              </button>} 
            </div>          

        </div>
     );
}

export default Timer;
