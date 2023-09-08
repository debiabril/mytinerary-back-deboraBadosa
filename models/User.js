import { Schema,model,Types } from "mongoose";

let collection = 'users';

let schema =  new Schema({
    name : {type:String, required:true},
    image : {type:String},
    itineraries: [{type: Types.ObjectId, ref : 'itineraries'}],
    role:{type: String, require:true}
},{
    timestamps: true
})

const User = model (collection, schema);
export default User;