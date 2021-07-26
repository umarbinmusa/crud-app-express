const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Employee_db', {useNewUrlParser: true, useUnifiedTopology: true,}, (err) =>{
    if(!err){
        console.log('mongodb connected succecful...')
    }
    else{
        console.log('error connection' + err)
    }

});

require('./employee.models');