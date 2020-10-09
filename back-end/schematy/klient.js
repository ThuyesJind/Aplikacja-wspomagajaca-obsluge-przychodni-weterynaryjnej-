const mongoose = require('mongoose');
//const { WizytaSchema } = require('../schematy/wizyta');
const Schema = mongoose.Schema;

const KlientSchema = new Schema({
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
    telefon: {
        type: String,
        required: true
    },
    //wizyty: [WizytaSchema]


    
});

const Klient = mongoose.model('Klient', KlientSchema, 'Klienci');

module.exports = Klient;