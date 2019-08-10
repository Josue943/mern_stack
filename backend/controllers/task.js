var Task = require('../models/task');

var controller = {

    getTask:async(req,res)=>{
   const task =await Task.findById(req.params.id)
    res.json(task)
},

    getTasks:async(req,res)=>{
        const tasks =await Task.find()
        res.json(tasks);
    },

    saveTask: async(req,res)=>{
        const {title,description} = req.body;
        const task = new Task({title,description})
        console.log(task)
        await task.save();
        res.json({status:'task saved'})
    },

    updateTask: async(req,res)=>{
    
        const {title,description} = req.body;
        const newTask = {title,description};
       await Task.findByIdAndUpdate(req.params.id,newTask);
        console.log(req.params.id);
        res.json({status:"task updated"});
    },

    deleteTask:async(req,res)=>{
        
     await Task.findByIdAndRemove(req.params.id);
        res.json({status:"task deleted"})

    }






}

module.exports = controller;
