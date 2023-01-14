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

// get shed list
router.get(`/get`, async (req, res) => {
    const shed = await Shed.find();

    if(!shed) {
        res.status(500).json({success: false});
    }
    res.send(shed);
});

// update shed
router.put('/put/:id', async(req, res) => {
    const shed = await Shed.findByIdAndUpdate(
        req.params.id,
        {
            arrivaltime: req.body.arrivaltime,
            finishtime: req.body.finishtime
        },
        {new: true} // if not update, return old data after put request
    )
    if(!shed){
        return res.status(404).send('The shed cannot be updated!');
    }

    res.send(shed);
});

module.exports = router;