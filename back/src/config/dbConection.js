require('dotenv').config()
const mongoose = require('mongoose');

const URI = process.env.URI

const dbConection = async ()=> {
    try { 
        await mongoose.connect(URI)
        
    } catch (error) {
        console.log (error)
    }

}

module.exports = dbConection;