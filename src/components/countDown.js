import React from "react";
import TimerInt from "./timerint";
import { useState } from 'react';

const CountDown = ()=>{
    const [currentTime, setcurrentTime ] = useState(0);
    const [intervalId, setintervalId ] = useState(null);

    const startNewTimer = () =>{
        setintervalId(setInterval(() => {
            setcurrentTime(currentTime=>{
                if(currentTime>0){
                    return currentTime-1;
                }
                destroyExitingTimer()
                return currentTime
            })
        }, 1000))
    }
    const destroyExitingTimer =()=>{
        if(intervalId){
            clearInterval(intervalId)
            setintervalId(null)
        }
    }
    const startTimer = (timeInSec)=>{
        console.log(`start timer with ${timeInSec} seconds`)
        destroyExitingTimer()
        setcurrentTime(timeInSec)
        startNewTimer()
    }
    return(
        <div id='count-down-app'>
            <h1>Count-Down-Timer</h1>
            <TimerInt onReqTimerStart={startTimer}/>
            <div id='currentTime'>
                {currentTime}
            </div>
        </div>
    )
}
export default CountDown