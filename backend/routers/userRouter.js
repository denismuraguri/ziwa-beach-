import express from 'express';
import data from '../data.js';
import User from '../models/userModel.js';
import expressAsyncHandler from 'express-async-handler'
//npm install --save express-async-handler

//express router makes the code to be modular
const userRouter = express.Router();

//users from data.js will be inserted to user model in mongodb
userRouter.get('/seed', expressAsyncHandler( async(req, res) => {
    {/**await User.remove({});**/}
    const createdUsers = await User.insertMany(data.users);
    res.send({ createdUsers });
}))
export default userRouter;
