const express = require('express');
const router = express.Router();
const Lek = require('../schematy/lek');

router.post('/nowylek', (req, res) => {
    const newLek = new Lek({
        nazwa: req.body.nazwa,
        ilosc: req.body.ilosc
    });
    newLek.save((err, newLek) => {
        if (err)
        {
            console.error(err);
            return res.status(400).json(err);

        } 
        console.log(newLek + " saved to leki collection.");
        return res.status(200).json(newLek);
        
    });
});

module.exports = router;