import React from 'react'
import { TimerForm } from '../Timer/TimerForm'

export const ToggleableTimerForm = ({isOpen}) => {
  
  if(isOpen){
    return (
      <TimerForm/>
    )
  } else {
    return (
      <div>
        <button>+</button>
      </div>
    )
  }
}


