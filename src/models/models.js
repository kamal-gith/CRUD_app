const mongoose = require('mongoose');

const _appschema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }, 
    email: {
        type: String,
        required: true,
        unique: true
    },
    country: {
        type: String,
        required: true
    }
});

const Student = mongoose.model('Student', _appschema);

module.exports = Student;