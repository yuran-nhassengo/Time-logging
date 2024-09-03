import React from 'react'

export const Timer = ({title,project,elapsed,runningSince}) => {
    const elapsedString = elapsed
  return (
    <div>
      <div>
        <div>
            {title}
        </div>
        <div>
            {project}
        </div>
        <div>
            <h2>{elapsedString}</h2>
        </div>
        <div>
            <span>
                editIcon
            </span>
            <span>
                trash icon
            </span>
        </div>
      </div>
      <div>
        Start
      </div>
    </div>
  )
}


