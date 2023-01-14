const {Vehicle}=require('../model/vehicle')
const express=require('express');
const router =express.Router();

router.post('/register', async(req, res) => {
    let vehicle = Vehicle({
        name: req.body.name,
        fueltype:req.body.fueltype,
    })

    vehicle= await vehicle.save();

    if(!vehicle){
        return res.status(404).send('The vehicle cannot be created!');
    }

    res.send(vehicle);
})
module.exports = router;