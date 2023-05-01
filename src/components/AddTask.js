import {useState} from 'react'

function AddTask({addTask}) {
    const [text,setText] = useState('')
    const [description,setDescription] = useState('')
    const [completed,setCompleted] = useState(false)


    const onSubmit = (e) =>{
        e.preventDefault()
        if(!text)alert('Please,add a text in the field')
        addTask({text,description,completed})
        setText('')
        setDescription('')
        setCompleted(false)
    }
  return (
        <form className='add-form' onSubmit={onSubmit}>
           <div className='form-control'>
            <label>Task</label>
            <input  type='text' 
                    placeholder='Add task'
                    value={text}
                    onChange={(e)=>setText(e.target.value)}/>
           </div>
           
           <div className='form-control'>
            <label>Description</label>
            <input 
                    type='text'
                    placeholder='Add description'
                    value={description}
                    onChange={(e)=>setDescription(e.target.value)}
                    />
                    
            </div>
           
           <div className='form-control form-control-check'>
            <label>Completed?</label>
            <input 
                    type='checkbox'
                    placeholder='Add task'
                    value={completed}
                    onChange={(e)=>setCompleted(e.target.checked)}
                    checked={completed}
                    />

           </div>
            <input 
                    type='submit'
                    value='save'
                    className='btn btn-block'/>
        </form>
    )
}

export default AddTask