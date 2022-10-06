const mongoose = require('mongoose');

let employeeScheme = new mongoose.Schema({
    name : String,
    email:String,
    gender:String,
    department : String,
    salary : Number
});

module.exports = mongoose.model('Employee', employeeScheme);