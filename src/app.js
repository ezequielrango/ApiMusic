const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const morganBody = require('morgan-body');
const loggerStream = require('./utils/handleLogger');
const mongoose = require('mongoose');
const env = require('dotenv').config();
const dbConnect = require('./bin/dbConnect')



const app = express();
dbConnect();
app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'storage')));

morganBody(app, {
    noColors : true,
    stream: loggerStream,
    skip : function(req,res){
        return res.statusCode < 400;
    },
});

app.use('/api',require("./routes"));

module.exports = app;
