const mongoose=require('mongoose');

const vehicleSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    fueltype:{
        type:String,
        required:true
    },
    
    
})
exports.Vehicle=mongoose.model('Vehicle',vehicleSchema)