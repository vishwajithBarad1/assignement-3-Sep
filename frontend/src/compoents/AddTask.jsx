import axios from 'axios';
import React, { useState } from 'react';

const AddTask = ({getAllTasks}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    async function addTask(){
        if(title && description){
            const response = await axios.post("http://localhost:4000/tasks",{
                    title:title,
                    description:description          
            });
            setTitle('');
            setDescription('');
            getAllTasks();
        } else {
            alert('Please fill in both title and description');
        }
    }
    function handleTitle(event){
        setTitle(event.target.value);
    }
    function handleDescreption(event){
        setDescription(event.target.value);
    }
    return (
        <div className='AddTask'>
            <input type="text" onChange={handleTitle}/>
            <input type="text" onChange={handleDescreption}/>
            <button onClick={addTask}>Add Task</button>
        </div>
    );
};

export default AddTask;