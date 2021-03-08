import express from 'express';
import mongoose from 'mongoose';
//import data from './data.js';
import userRouter from './routers/userRouter.js';
import roomRouter from './routers/roomRouter.js';
import dotenv from 'dotenv';
//import bookRouter from './routers/orderRouter.js';
import orderRouter from './routers/orderRouter.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//connect to mongodb
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/Ziwa', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})

/**
app.get('/api/rooms/:id', (req, res) => {
  const room = data.rooms.find((x) => x._id === req.params.id);
  if (room) {
    res.send(room);
  } else {
    res.status(404).send({ message: 'Room Not found'});
  }
});
**/

/** 
app.get('/api/rooms', (req, res) => {
    res.send(data.rooms);
})
**/

app.use('/api/users', userRouter);

app.use('/api/rooms', roomRouter);
app.use("/api/orders", orderRouter)


app.get('/', (req, res) => {
  res.send('Server is ready');
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;




/**
app.get('/', (req, res) => {
  res.send('Server is ready');
});
*/


app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});