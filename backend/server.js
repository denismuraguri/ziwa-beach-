import express from 'express';
import data from './data.js';

const app = express();

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

app.get('/', (req, res) => {
  res.send('Server is ready');
});

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});