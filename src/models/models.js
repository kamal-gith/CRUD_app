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

const Player = mongoose.model('Player', _appschema);

module.exports = Player;