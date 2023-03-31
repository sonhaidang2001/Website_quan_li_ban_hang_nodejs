const mongoose = require('mongoose');
// const dotenv = require('dotenv').config();

async function connect() {
    try {
        await mongoose.connect('mongodb+srv://Food:Food123@cluster0.avbtt0v.mongodb.net/Node_Food?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connect successfully!!!');
    } catch (error) {
        console.log('Connect failure!!!');
    }
}

module.exports = { connect };