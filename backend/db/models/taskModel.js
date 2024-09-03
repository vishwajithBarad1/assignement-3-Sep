const {mongoose} = require("../connectMongoDB")

// Define the schema for the "task" collection
const taskSchema = mongoose.Schema({
    title:{
        type: String, 
        required: true 
    },
    description: {
        type:String
    },
    date: {
        type:Date,
        default: new Date()
    },
    completed:{
        type: Boolean, 
        default: false 
    },
    isDeleted:{
        type: Boolean, 
        default: false
    }
});

// Create the "Task" model using the defined schema

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;