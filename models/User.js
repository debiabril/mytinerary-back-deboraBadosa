import { Schema,model,Types } from "mongoose";

let collection = 'users';

let schema =  new Schema({
    name : {type:String, required:true},
    email: {type: String, required:true},
    password: {type:String, required:true},
    image : {type:String},
    itineraries: [{type: Types.ObjectId, ref : 'itineraries'}],
    role:{type: String},
    is_verified: {type: Boolean, default: true},
    verified_code: {type: String}
},{
    timestamps: true
})

const User = model (collection, schema);
export default User;