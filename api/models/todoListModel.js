'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
    name:{
        type:String,
        required : 'Kindly enter the name of the task'
    },
    Create_date:{
        type:Date,
        default:Date.now
    },
    status:{
        type:[{
            type:String,
            enum:['Pending','Ongoing','Completed']
        }],
        default:['Pending']
    }
});

module.exports = mongoose.model('Tasks',TaskSchema);