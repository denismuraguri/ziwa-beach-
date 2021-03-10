import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import { isAuth } from '../utils.js';
import Order from "../models/orderModel.js"

const orderRouter  = express.Router();
orderRouter.get('/mine', isAuth, expressAsyncHandler(async(req, res) =>{
  const orders = await Order.find({user: req.user._id})
  res.send(orders);
}));
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

orderRouter.put(
  '/:id/pay',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id)
    if (order) {
      order.isPaid = true;
      order.paidAt = Date.now();
      order.paymentResult = {
        id: req.body.id,
        status: req.body.status,
        update_time: req.body.update_time,
        email_address: req.body.email_address,
      };
      const updatedOrder = await order.save();
      res.send({message: 'Order Paid', order: updatedOrder})
    }
    else {
       res.status(401).send({ message: "Order Not Found"});
    }

  })
)

{/**
orderRouter.put(
  '/:id/pay',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id).populate(
      'user',
      'email name'
    );
    if (order) {
      order.isPaid = true;
      order.paidAt = Date.now();
      order.paymentResult = {
        id: req.body.id,
        status: req.body.status,
        update_time: req.body.update_time,
        email_address: req.body.email_address,
      };
      const updatedOrder = await order.save();
      mailgun()
        .messages()
        .send(
          {
            from: 'Amazona <amazona@mg.yourdomain.com>',
            to: `${order.user.name} <${order.user.email}>`,
            subject: `New order ${order._id}`,
            html: payOrderEmailTemplate(order),
          },
          (error, body) => {
            if (error) {
              console.log(error);
            } else {
              console.log(body);
            }
          }
        );
      res.send({ message: 'Order Paid', order: updatedOrder });
    } else {
      res.status(404).send({ message: 'Order Not Found' });
    }
  })
);
 */}

export default orderRouter;