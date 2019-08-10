'use strict'
var morgan = require('morgan');
var express = require('express');
var path =  require('path');

var app = express();
//routes
var task_routes = require('./routes/task')

//midware
app.use(morgan('dev'));
app.use(express.json()); //comprueba si es un json


//static files
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
//console.log(path.join(__dirname,'public'));//une las variables

//route
app.use('/api',task_routes);

module.exports = app;