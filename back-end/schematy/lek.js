const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LekSchema = new Schema({
    nazwa: {
        type: String,
        required: true
    },
    ilosc: {
        type: Number,
        required: true
    },


    
});

const Lek = mongoose.model('Lek', LekSchema, 'Leki');

module.exports = Lek;