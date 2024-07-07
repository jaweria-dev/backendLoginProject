// const mongoose = require('mongoose');



// function connectDb(uri){
//     console.log("connect Db");
//     return mongoose.connect(uri, {
//         useNewUrlParser : true,
//         useUnifiedTopology : true

//     }
//     )
// }



// module.exports = connectDb;


const mongoose = require('mongoose');
require('dotenv').config();

const dbConn = process.env.MONGODB_URL;

const connectToDatabase = async function () {
    console.log(dbConn)
    try {
        await mongoose.connect(dbConn);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

module.exports = connectToDatabase