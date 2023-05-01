import React from 'react'
import {FaTimes} from 'react-icons/fa'
function Task({task,handleDelete}) {
  return (
    <>
        <div className='task'>
            <h1><FaTimes onClick={()=>handleDelete(task.id)} 
                style={{color:'red'}}/>{task.title}</h1>
            <p>{task.description}</p>
        </div>
    </>
  )
}

export default Task