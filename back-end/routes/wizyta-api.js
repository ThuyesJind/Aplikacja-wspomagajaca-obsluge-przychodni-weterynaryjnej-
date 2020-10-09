const express = require('express');
const router = express.Router();
const Wizyta = require('../schematy/wizyta');
//mongoose.set('useFindAndModify', false);

router.post('/nowawizyta', (req, res) => {
    const newWizyta = new Wizyta({
        idKlienta: req.body.idKlienta,
        godzina: req.body.godzina,
        idWeterynarza: req.body.idWeterynarza,
        zwierze: req.body.zwierze,
        informacje: req.body.informacje
    });
    newWizyta.save((err, newWizyta) => {
        if (err) {
            console.error(err);
            return res.status(400).json(err);
        }
        console.log(newWizyta + " saved to wizyta collection.");
        return res.status(200).json(newWizyta);
    });
});

router.post('/raport', (req, res) => {
    const filter = {
        _id: req.body._id,
    };
    const update = {
        opis: req.body.opis
    }
    Wizyta.findOneAndUpdate(filter, update, (err) => {
        if (err) {
            console.error(err);
            return res.status(400).json(err);
        }
        console.log(" saved to wizyta collection.");
        return res.status(200).json({success: true});
    });
});
router.get('/wszystkiewizyty', (req, res) => {
    Wizyta.find({}, (err, wizyty) => {
        if(err){
            return res.status(200).json([]);
        }
        return res.status(200).json(wizyty);
    })
});



module.exports = router;