<<<<<<< HEAD
=======
'use strict';
>>>>>>> 32ad5c30f8ef8ad03613eafcb6ecacc141220b5c
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
<<<<<<< HEAD
    name: {
        type: String,
        required: 'kindly enter the name of the task'
    },
    Created_date: {
        type: Date,
        default : Date.now

    },
    status: {
        type: [{
            type: String,
            enum: ['pending', 'ongoing', 'completed']

        }],
        default: ['pending']
    }
    
});

module.exports = mongoose.model('Tasks', TaskSchema);
=======
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
>>>>>>> 32ad5c30f8ef8ad03613eafcb6ecacc141220b5c
