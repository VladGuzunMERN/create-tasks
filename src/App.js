import Header from './components/Header'
import {useState} from 'react'
import Tasks from './components/Tasks'
import { FaExclamationTriangle } from 'react-icons/fa'

function App() {
  const [tasks,setTasks] = useState(
    [{ id: 1,completed:true, title: "Task 1", description: "Fix bug on homepage" },
      { id: 2,completed:false, title: "Task 2", description: "Implement new payment gateway" },
      { id: 3,completed:false, title: "Task 3", description: "Write user manual for new feature" },])
   
  
      const handleDelete = (id) => {
      setTasks(tasks.filter(task => task.id !== id))
      }
    
  return (
    <div className='container'>
        <Header title={'Task Tracker'}/>
        {tasks.length === 0 ? (
        <>
          <p style={{display:'inline-block'}}>No tasks to show</p>
          <FaExclamationTriangle style={{color:'red'}} />
        </>):(
        <Tasks 
              tasks={tasks}
              handleDelete={handleDelete}
          />)
         }
    </div>
  );
}

export default App;
