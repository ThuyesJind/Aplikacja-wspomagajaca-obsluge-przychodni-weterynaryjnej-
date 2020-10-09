const express = require('express');
const router = express.Router();
const Klient = require('../schematy/klient');

router.post('/nowyklient', (req, res) => {
    const newKlient = new Klient({
        imie: req.body.imie,
        nazwisko: req.body.nazwisko,
        email: req.body.email,
        haslo: req.body.haslo,
        telefon: req.body.telefon
    });
    newKlient.save((err, newKlient) => {
        if (err) {
            console.error(err);
            return res.status(400).json(err);
        }
        console.log(newKlient + " saved to klienci collection.");
        return res.status(200).json(newKlient);
    });
});

router.post('/klientlogin', (req, res) => {
    const klient = new Klient({
        email: req.body.email,
        haslo: req.body.haslo
    });
    
    Klient.findOne({email: klient.email, haslo: klient.haslo}, (err, klient) => {
        if (err || !klient) {
            console.error(err);
            return res.status(400).json(err);
        }
        console.log(klient + " znaleziono klienta o podanych danych");
        return res.status(200).json(klient);
    });
});

module.exports = router;