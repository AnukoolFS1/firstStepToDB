const mongoose = require('mongoose');

async function connectDB(){
   const res  = await mongoose.connect('mongodb+srv://anukool:fmdb1@learningmdb.cqck4.mongodb.net/CRUDApp?retryWrites=true&w=majority&appName=LearningMDB');
   console.log('DB Connected!')
}


module.exports = connectDB