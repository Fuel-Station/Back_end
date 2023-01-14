const {Vehicle}=require('../model/vehicle')
const express=require('express');
const router =express.Router();
//add vehicle
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
    

});

//get vehicel
router.get(`/get`,async(req,res)=>{
    const vehicle=await Vehicle.find();

    if(!vehicle){
        res.status(500).json({success:false});
    }
    res.send(vehicle);
})

module.exports = router;