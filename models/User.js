import { Schema,model,Types } from "mongoose";

let collection = 'users';

let schema =  new Schema({
    name : {type:String, required:true},
    image : {type:String},
    
    /* user: {type: Types.ObjectId, ref: 'users'}, */
},{
    timestamps: true
})

const User = model (collection, schema);
export default User;