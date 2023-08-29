import { Schema,model,Types } from "mongoose";

let collection = 'cities';

let schema =  new Schema({
    city : {type:String, required:true},
    country : {type:String, required:true},
    url : {type:String, required:true},
    language: {type:String},
    currency: {type:String},
    description: {type:String},
    cost: {type:Number},
},{
    timestamps: true
})

const City = model (collection, schema);
export default City;

