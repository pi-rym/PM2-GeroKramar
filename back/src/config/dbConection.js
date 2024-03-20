const mongoose = require('mongoose');

const URI = 'mongodb+srv://Gerokramar:wN2qTuwKAgTmoZXf@cluster0.qxnfigy.mongodb.net/MoviesDb?retryWrites=true&w=majority&appName=Cluster0'

const dbConection = async ()=> {
    try { 
        await mongoose.connect(URI)
        
    } catch (error) {
        console.log (error)
    }

}

module.exports = dbConection;