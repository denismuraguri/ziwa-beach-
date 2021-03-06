import mongoose from 'mongoose';

const roomSchema = new mongoose.Schema(
  {
    name: {type: String, required: true, unique: true},
    image:{ type: String, required: true},
    type:{ type: String, required: true},
    price:{ type: Number, required: true},
    size:{ type: Number, required: true},
    capacity:{ type: Number, required: true},
    pets:{ type: String, required: true},
    rating:{ type: Number, required: true},
    roomsAvailable:{ type: Number, required: true},
    numReviews: { type: Number, required: true},
    breakfast: { type: String, required: true}, 
    description:{ type: String, required: true}, 
  },
  {
    timestamps: true,
  }
);
const Room = mongoose.model('Room', roomSchema);

export default Room; 





{/**import mongoose from "mongoose";

const roomSchema =new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    image:{ type: String, required: true},
    type:{ type: String, required: true},
    price:{ type: Number, required: true},
    size:{ type: Number, required: true},
    capacity:{ type: Number, required: true},
    pets:{ type: String, required: true},
    rating:{ type: Number, required: true},
    roomsAvailable:{ type: Number, required: true},
    numReviews: { type: Number, required: true},
    breakfast: { type: String, required: true}, 
    description:{ type: String, required: true},    
}
,{
    timestamps: true,
});
const Room = mongoose.model('Room', roomSchema);

export default Room; 
**/}