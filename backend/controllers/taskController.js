const taskModel = require('../db/models/taskModel');

exports.createTask = async function(req,res){
    try{
        const {title, description} = req.body;
        const newTask = new taskModel({title, description});
        await newTask.save();
        res.status(201).json({
            success: true,
            message: 'Task created successfully',
            data: newTask
        });
    }catch(error){
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Error creating task'
        });
    }
}
exports.updateTask = async function(req,res){
    try{
        const {id} = req.query;
        const {title, description, completed} = req.body;
        let updateObj = {}
        if(title) updateObj.title = title;
        if(description) updateObj.description = description;
        if(completed) updateObj.completed = completed;
        const response = await taskModel.updateOne({_id:id},updateObj);
        if(response.matchedCount){
            res.status(200).json({
                success: true,
                message: 'Task updated successfully'
            });
        }else{
            res.status(404).json({
                success: false,
                message: 'Task not found'
            });
        }
    }catch(error){
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Error creating task'
        });
    }
}

exports.deleteTask = async function(req,res){
    try{
        const {id} = req.query;
        const response = await taskModel.updateOne({_id:id},{isDeleted:true});
        if(response.matchedCount){
            res.status(200).json({
                success: true,
                message: 'Task deleted successfully'
            });
        } else{
            res.status(404).json({
                success: false,
                message: 'Task not found'
            });
        }
    }catch(error){
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Error deleting task'
        });
    }
}

exports.getTasks = async function(req,res){
    try{
        const tasks = await taskModel.find({isDeleted:false});
        res.status(200).json({
            success: true,
            message: 'Tasks fetched successfully',
            data: tasks
        });
    }catch(error){
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Error fetching tasks'
        });
    }
}