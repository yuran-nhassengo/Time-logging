import React from 'react'
import { TimerForm } from './TimerForm';

export const EditableTimer = ({isOpen}) => {
  
   
        if (isOpen){

            return (
              <div>
                <TimerForm/>
              </div>
            );

        } else {

            return (
              <div>
                false
              </div> 
            );

      }
      
   
  
}


