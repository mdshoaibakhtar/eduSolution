const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/async";

const connectToMongo = () => {
    mongoose.connect(mongoURI).then(() => {
        console.log('connected to mongo successfully');
    }).catch(() => {
        console.log('something went wrong, contact your developer');
    })
}

module.exports = connectToMongo;