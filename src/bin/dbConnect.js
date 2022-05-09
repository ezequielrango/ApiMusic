const { db } = require('./config');
const {user ,name,password} = db;
const mongoose = require('mongoose');

const dbConnect = () => {
    
    const uri = `mongodb+srv://${user}:${password}@cluster0.uqun4.mongodb.net/${name}?retryWrites=true&w=majority`
    mongoose.connect(uri)
       .then(()=> console.log(`Database connect: ${name}`))
       .catch(e => console.log(e));


}   

module.exports = dbConnect;