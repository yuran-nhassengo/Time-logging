import React from 'react'

export const TimerForm = ({title,project,submitText}) => {
    const submitText = title ? "update" : "Create";
  return (
    <div>
        <div>
            <div>
                <div>
                    <label htmlFor="">Title</label>
                    <input type="text" defaultValue={title} />
                </div>
                <div>
                    <label htmlFor="">Project</label>
                    <input type="text" defaultValue={project} />
                </div>
                <div>
                    <button>{submitText}</button>
                    <button>Cancel</button>
                </div>
            </div>
        </div>
    </div>
  )
}


