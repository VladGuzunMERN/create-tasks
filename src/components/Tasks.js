import Task from './Task'

function Tasks({tasks,handleDelete,toggleReminder}) {
  return (
    <>
        {tasks.map(task =>{
           return <Task key={task.id}
                  task={task}
                  handleDelete={handleDelete} 
                  toggleReminder={toggleReminder}
                  
                  />
        })}
    </>
  )
}

export default Tasks