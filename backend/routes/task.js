var express = require('express');

var router = express.Router();
var Task = require('../models/task');
var taskController = require('../controllers/task');

//routes
router.get('/tasks/:id',taskController.getTask);
router.get('/tasks',taskController.getTasks);
router.post('/tasks',taskController.saveTask);
router.put('/tasks/:id',taskController.updateTask)
router.delete('/tasks/:id',taskController.deleteTask)


module.exports = router;