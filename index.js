const express = require('express');
const app = express();
const connectDB = require('./models/db')
const router = require('./controllers/router')

try{
    connectDB();
}
catch(err){
    console.log(err)
}

const PORT = 3000;

app.use(express.json())

app.use('/emp', router)

app.listen(PORT, ()=>console.log('server initiated'))