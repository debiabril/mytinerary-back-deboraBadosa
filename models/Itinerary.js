import { Schema,model,Types } from "mongoose";

let collection = 'itineraries';

let schema =  new Schema({
    name : {type:String, required:true},
    duration : {type:String, required:true},
    price : {type:Number, required:true},
    likes: {type:Number},
    hashtags: [{type:String}],
    user: {type: Types.ObjectId, ref:'users'},
    activities:[{ type: Types.ObjectId, ref:'activities' }],
    comments:[{
        comment: {type: String},
        user : {type: Types.ObjectId, ref:'users' }
    }],
},{
    timestamps: true
})

const Itinerary = model (collection, schema);
export default Itinerary;