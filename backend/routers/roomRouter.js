import express from 'express'
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import Room from '../models/roomModel.js';

const roomRouter = express.Router();

roomRouter.get('/',expressAsyncHandler(async(req, res) =>{
    const rooms = await Room.find({});
    res.send(rooms);
}));

roomRouter.get(
    '/seed',
    expressAsyncHandler(async (req, res) => {
        await Room.deleteMany({});
        const createdRooms = await Room.insertMany(data.rooms);
        res.send({ createdRooms });
    })
);

//

roomRouter.get('/:id', expressAsyncHandler(async(req, res) => {
    const room = await Room.findById(req.params.id);
    if (room){
        res.send(room);
    }else{
        res.status(404).send({ message: 'Room Not Fond'});
    }
})
);




export default roomRouter;


/**import express from 'express'
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import Room from '../models/roomModel.js';

const roomRouter = express.Router();

roomRouter.get('/',expressAsyncHandler(async(req, res) =>{
    const rooms = await Room.find({});
    res.send(rooms);
}));

roomRouter.get('/seed', expressAsyncHandler(async(req, res) => {
    //await Room.remove({});
    const createdRooms = await Room.insertMany(data.rooms);
    res.send({createdRooms});
})
);

roomRouter.get('/:id', expressAsyncHandler(async(req, res) => {
    const room = await Room.findById(req.params.id);
    if (room){
        res.send(room);
    }else{
        res.status(404).send({ message: 'Room Not Fond'});
    }
})
);
export default roomRouter;
**/