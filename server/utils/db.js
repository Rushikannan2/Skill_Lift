const mongoose = require('mongoose');

//const URI = "mongodb://127.0.0.1:27017/mern_admin";

const URI = "mongodb+srv://kannanrushi05:00wLCl7a976e6CAZ@cluster0.swok0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


const connectDb = async () => {
    try{
        await mongoose.connect(URI);
        console.log('connection successful to DB');

    }catch(error){
        console.error("Database connection failed");
        process.exit(0);
    }
};
module.exports = connectDb;
