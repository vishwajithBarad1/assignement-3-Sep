import React from 'react';
import axios from 'axios';

const TaskCard = ({id,title,descreption,completed, getAlltasks}) => {
    async function handleComplete(){
        try{
            await axios.put(`http://localhost:4000/tasks?id=${id}`,{
                completed: true
            })
            getAlltasks();
        }catch(err){
            alert("faild to set complete");
        }
    }
    
    async function handleDelete(){
        try{
            await axios.delete(`http://localhost:4000/tasks?id=${id}`)
            getAlltasks();
        }catch(err){
            alert("faild to delete task");
        }
    }
    return (
        <div className='taskCard'>
            <h2 >{title}</h2>
            <h3 >{descreption}</h3>
            <div className='footer'>
            {completed?<div className='completed'>Task Completed</div>:<button onClick={handleComplete}>complete</button>}
            <button onClick={handleDelete}>delete</button>
            </div>
        </div>
    );
};

export default TaskCard;