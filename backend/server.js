import express from 'express';
import data from './data.js';
import mongoose from 'mongoose';
import userRouter from './routers/userRouter.js';

const app = express();

//connect to mongodb
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/Ziwa', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})

app.get('/api/rooms', (req, res) => {
    res.send(data.rooms);
})



app.get('/api/rooms/:id', (req, res) => {
  const room = data.rooms.find((x) => x._id === req.params.id);
  if (room) {
    res.send(room);
  } else {
    res.status(404).send({ message: 'Room Not found'});
  }
});

const port = process.env.PORT || 5000;
app.use('/api/users', userRouter)

app.get('/', (req, res) => {
  res.send('Server is ready');
});

app.use((error, req, res, next) => {
  res.status(500).send({message: error.message});
})

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});