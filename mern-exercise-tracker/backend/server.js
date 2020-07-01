//IMPORT DEPENDECIES
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
require('dotenv').config();

//const db = require('./config');


const port = process.env.PORT || 5000;


const app = express();

const exerciseRoute = require('./routes/exercise');
const usersRoute = require('./routes/users');

//MIDDLEWARES
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

//middlewares for routing
app.use('/exercise', exerciseRoute);   //load exercise route
app.use('/users', usersRoute)     //load everything in usersRoute

const uri = process.env.DB_URL;
mongoose.connect(uri,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    });

const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log('connection to db successful');
})
connection.on('error', ()=>{
    console.log('connection failed');
})

app.listen(port, ()=>{
    console.log(`server listening on port ${port}`)
})


/*
 mongodb://localhost:27017
PORT = 3000
*/