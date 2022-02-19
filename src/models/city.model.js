const {Schema, model} = require("mongoose");

const citySchema = new Schema({
    cityname:{type:String,required:true},
    districtname:{type:String,required:true},
    population:{type:Number,required:true}
},{
    versionKey:false,
    timestamps:true
})

module.exports =model("city", citySchema);