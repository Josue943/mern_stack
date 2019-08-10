var mongoose = require('mongoose')
var app = require('./app');

var port = 3700;
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/tasks')
                .then(()=>{
                    console.log("Db is connected")
                    app.listen(port, () => {
                        console.log(`App listening on port ${port}!`);
                    });
                })
                .catch(err=>console.log(err))