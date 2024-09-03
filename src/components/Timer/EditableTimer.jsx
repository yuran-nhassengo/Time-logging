import React from 'react'
import { TimerForm } from './TimerForm';
import { Timer } from './Timer';

export const EditableTimer = ({title,project,elapsed,runnungSince,editFormOpen}) => {
  
   
        if (editFormOpen){

            return (
              <div>
                <TimerForm
                title={title}
                project={project}/>
              </div>
            );

        } else {

            return (
              <Timer
              title={title}
              project={project}
              elapsed={elapsed}
              runnungSince={runnungSince}/>
            );

      }
      
   
  
}


