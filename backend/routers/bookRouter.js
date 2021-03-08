import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Book from '../models/bookingModel.js';
import { isAuth } from '../utils.js';

const bookRouter = express.Router();

bookRouter.post('/', isAuth,
    expressAsyncHandler(async(req, res) => {

    if(req.body.bookItems.length === 0) {
        res.status(400).send({ message: 'Cart is Empty'});

    } else{
        const book = new Book({
            bookItems: req.body.bookItems,
            bookingAddress: req.body.bookingAddress,
            paymentMethod: req.body.paymentMethod,
            roomsPrice: req.body.roomsPrice,
            taxPrice: req.body.bookItems,
            totalPrice: req.body.bookItems,
            user: req.user._id,
        });
        const createdBook = await book.save();
        res.status(201).send({ message: 'new Order Created', book: createdBook})
    }
}))
export default bookRouter;