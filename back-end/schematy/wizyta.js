const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WizytaSchema = new Schema({
    idKlienta: {
        type: Schema.Types.ObjectId,
        required: true
    },
    godzina: {
        type: String,
        required: true
    },
    idWeterynarza: {
        type: Schema.Types.ObjectId,
        required: true
    },
    zwierze: {
        type: String,
        required: true
    },
    informacje: {
        type: String,
        required: false
    },
    opis:
    {
        type: String,
        required: false
    }

    
});

const Wizyta = mongoose.model('Wizyta', WizytaSchema, 'Wizyty');

module.exports = Wizyta