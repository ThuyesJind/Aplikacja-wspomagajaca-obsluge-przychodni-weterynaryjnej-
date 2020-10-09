const express = require('express');
const router = express.Router();
const Weterynarz = require('../schematy/weterynarz');

router.post('/nowyweterynarz', (req, res) => {
    const newWeterynarz = new Weterynarz({
        imie: req.body.imie,
        nazwisko: req.body.nazwisko,
        email: req.body.email,
        haslo: req.body.haslo
    });
    newWeterynarz.save((err, newWeterynarz) => {
        if (err)
        {
            console.error(err);
            return res.status(400).json(err);

        } 
        console.log(newWeterynarz + " saved to weterynarze collection.");
        return res.status(200).json(newWeterynarz);
        
    });
});

router.post('/weterynarzlogin', (req, res) => {
    const weterynarz = new Weterynarz({
        email: req.body.email,
        haslo: req.body.haslo
    });
    
    Weterynarz.findOne({email: weterynarz.email, haslo: weterynarz.haslo}, (err, weterynarz) => {
        if (err || !weterynarz) {
            console.error(err);
            return res.status(400).json(err);
        }
        console.log(weterynarz + " znaleziono weterynarza o podanych danych");
        return res.status(200).json(weterynarz);
    });
});

router.get('/wszyscyweterynarze', (req, res) => {
    Weterynarz.find({}, (err, weterynarze) => {
        if(err){
            return res.status(200).json([]);
        }
        return res.status(200).json(weterynarze);
    })
});
router.get('/weterynarz/:id', (req, res) => {
    Weterynarz.find({_id: req.params.id}, (err, weterynarz) => {
        if(err){
            return res.status(200).json([]);
        }
        return res.status(200).json(weterynarz);
    })
});

module.exports = router;