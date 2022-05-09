const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const env = require('dotenv').config();
const dbConnect = require('./bin/dbConnect')


// Connection dataBase
// const {user ,name,password} = db;
// const uri = `mongodb+srv://${user}:${password}@cluster0.uqun4.mongodb.net/${name}?retryWrites=true&w=majority`

//  mongoose.connect(uri)
//     .then(()=> console.log(`database connect: ${name}`))
//     .catch(e => console.log(e));

// import routes
// const indexRouter = require('./routes/index');
// const usersRouter = require('./routes/user');
// const tracksRouter = require('./routes/tracks');


const app = express();
dbConnect();
app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/api ', indexRouter);
// app.use('/users', usersRouter);
app.use('/api',require("./routes"));

module.exports = app;
