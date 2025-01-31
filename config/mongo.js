const mongoose = require('mongoose');

const NODE_ENV = process.env.NODE_ENV;

const connectDB = async () => {
    try{
        await mongoose.connect(NODE_ENV === 'test' ? process.env.DB_URI_TEST : process.env.DB_URI);
        console.log(`MongoDB Connected`);
    }catch(e){
        console.log(e);
    }
}

module.exports = {connectDB};