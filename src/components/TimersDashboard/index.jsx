import React from 'react'
import { EditableTimerList } from '../TimerList/EditableTimerList'
import { ToggleableTimerForm } from './ToggleableTimerForm'

export const TimersDashboard = () => {
  return (
    <div>
        <div>
          <EditableTimerList/>
          <ToggleableTimerForm isOpen={true}/>
        </div>
      
    </div>
  )
}


