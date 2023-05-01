import Header from './components/Header'
import {useState} from 'react'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { FaExclamationTriangle } from 'react-icons/fa'
import {v4 as uuidv4} from 'uuid'


function App() {
  const [showAddTask,setshowAddTask] = useState(true)
  const [tasks,setTasks] = useState(
    [{ id: 1,completed:true, title: "Task 1", description: "Fix bug on homepage" },
      { id: 2,completed:false, title: "Task 2", description: "Implement new payment gateway" },
      { id: 3,completed:false, title: "Task 3", description: "Write user manual for new feature" },])
   
  
      const handleDelete = (id) => {
      setTasks(tasks.filter(task => task.id !== id))}

      const toggleReminder = (id) => {
        setTasks(
          tasks.map((task) => task.id === id ? {
            ...task,completed: !task.completed
          }: task)
        )
      }
      const addTask = (task) => {
         const new_task = {
          title: task.text,
          description: task.description,
          id: uuidv4(),
          completed: false
        }
        setTasks([...tasks,new_task])
      }
  return (
    <div className='container'>
       {showAddTask && <AddTask addTask={addTask}/>} 
        <Header title={'Task Tracker'}
                 onAdd={()=>setshowAddTask(!showAddTask)}
                 showAddTask={showAddTask}
                 />
        {tasks.length === 0 ? (
        <>
          <p style={{display:'inline-block'}}>No tasks to show</p>
          <FaExclamationTriangle style={{color:'red'}} />
        </>):(
        <Tasks 
              tasks={tasks}
              handleDelete={handleDelete}
              toggleReminder={toggleReminder}
          />)
         }
    </div>
  );
}

export default App;
