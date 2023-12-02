import React from 'react'
import './Timer.css'


const TimerControls = ({timerOn, onStart, onStop, onReset, onLap }) => {
  return <div className='timer-controls'>
    
    {!timerOn && <button onClick={onStart} >Iniciar</button>}
    {timerOn && <button onClick={onStop} >Parar</button>}
    {timerOn && <button onClick={onLap} >Voltas</button>}
    <button onClick={onReset} >Zerar</button>

    
    </div>;

}

export default TimerControls