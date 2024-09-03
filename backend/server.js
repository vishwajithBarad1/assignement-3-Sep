const express = require('express');
const cors = require('cors');
require('dotenv').config();
require('./db/connectMongoDB');
const controller = require('./controllers/taskController')
const app = express();

app.use(express.json());
app.use(cors());
app.get('/tasks',controller.getTasks);
app.post('/tasks',controller.createTask);
app.put('/tasks',controller.updateTask);
app.delete('/tasks',controller.deleteTask);

app.listen(process.env.PORT,()=>{ console.log('listening on port',process.env.PORT)});