import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import { isAuth } from '../utils.js';
import Order from "../models/orderModel.js"

const orderRouter  = express.Router();

orderRouter.post('/', isAuth,
    expressAsyncHandler(async(req, res) => {

    if(req.body.orderItems.length === 0) {
        res.status(400).send({ message: 'Cart is Empty'});

    } else{
        const order = new Order({
            orderItems: req.body.orderItems,
            bookingAddress: req.body.bookingAddress,
            paymentMethod: req.body.paymentMethod,
            roomsPrice: req.body.roomsPrice,
            taxPrice: req.body.taxPrice,
            totalPrice: req.body.totalPrice,
            user: req.user._id,
        });
        const createdOrder = await order.save();
        res.status(201).send({ message: 'new Order Created', order: createdOrder})
    }
}))

orderRouter.get(
    '/:id',
    isAuth,
    expressAsyncHandler(async (req, res) => {
      const order = await Order.findById(req.params.id);
      if (order) {
        res.send(order);
      } else {
        res.status(404).send({ message: 'Order Not Found' });
      }
    })
  );

export default orderRouter;