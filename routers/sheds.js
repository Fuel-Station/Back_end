const {Shed} = require('../model/shed');
const express = require('express');
const router = express.Router();

// register 
router.post('/register', async(req, res) => {
    let shed = Shed({
        name: req.body.name,
        location: req.body.location,
        fueltype: req.body.fueltype,
        arrivaltime: req.body.arrivaltime,
        finishtime: req.body.finishtime
    })

    shed = await shed.save();

    if(!shed){
        return res.status(404).send('The shed cannot be created!');
    }

    res.send(shed);
})

module.exports = router;