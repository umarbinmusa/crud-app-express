const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var employeeschema = new mongoose.Schema({
    fullName: {
        type: String
    },
    email: {
        type: String
    },
    mobile: {
        type: String
    },
    city: {
        type: String
    }
});
mongoose.model('employee', employeeschema);