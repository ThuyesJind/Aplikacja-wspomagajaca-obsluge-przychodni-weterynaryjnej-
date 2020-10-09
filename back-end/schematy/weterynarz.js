const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WeterynarzSchema = new Schema({
    imie: {
        type: String,
        required: true
    },
    nazwisko: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    haslo: {
        type: String,
        required: true
    },
    ocena: {
        type: Array,
        default: []
    },
  

    
});

const Weterynarz = mongoose.model('Weterynarz', WeterynarzSchema, 'Weterynarze');

module.exports = Weterynarz;