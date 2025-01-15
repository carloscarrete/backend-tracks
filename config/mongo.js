const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.DB_URI);
        console.log(`MongoDB Connected`);
    }catch(e){
        console.log(e);
    }
}

module.exports = {connectDB};