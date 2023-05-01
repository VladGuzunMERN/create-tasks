import Task from './Task'

function Tasks({tasks,handleDelete}) {
  return (
    <>
        {tasks.map(task =>{
           return <Task key={task.id}
                  task={task}
                  handleDelete={handleDelete} 
                  
                  />
        })}
    </>
  )
}

export default Tasks