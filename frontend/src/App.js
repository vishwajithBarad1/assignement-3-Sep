import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import TaskCard from './compoents/TaskCard';
import AddTask from './compoents/AddTask';
function App() {
  const [tasks,setTasks]= useState([]);
  async function getAllTasks(){
    try {
      const response = await axios.get('http://localhost:4000/tasks');
      console.log(response.data.data);
      setTasks(response.data.data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(()=>{
    getAllTasks();
  },[]);
  return (
    <>
      <AddTask getAllTasks={getAllTasks}/>
      <div className='tasksContainer'>
        {tasks.map((task,index)=>{return <TaskCard key={index} id={task._id} title={task.title} descreption={task.description} completed={task.completed} getAlltasks={getAllTasks}/>})}
      </div>
    </>
  );
}

export default App;
