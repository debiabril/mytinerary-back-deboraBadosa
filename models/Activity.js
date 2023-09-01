import { Schema,model,Types } from "mongoose";

let collection = 'activities';

let schema =  new Schema({
    name : {type:String, required:true},
    image : {type:String},
    text: {type:String},
},{
    timestamps: true
})

const Activity = model (collection, schema);
export default Activity;