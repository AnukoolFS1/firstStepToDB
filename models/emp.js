const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const empSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        isUnique:true
    },
    phone:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    }
})

module.exports = new mongoose.model('Employee', empSchema)