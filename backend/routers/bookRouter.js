import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Book from '../models/bookingModel';

const bookRouter = express.Router();

bookRouter.post('/', expressAsyncHandler(async(req, res) => {
    if(req.body.bookItems.length === 0) {
        res.status(400).send({ message: 'Cart is Empty'});

    } else{
        const book = new Book({
            bookItems: req.body.bookItems
        })
    }
}))