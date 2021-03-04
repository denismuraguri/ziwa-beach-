//import React, { useEffect, useState } from 'react'

import React, { useEffect} from 'react'
import Room from '../component/Room';
//import data from '../data';
//import axios from 'axios'
import MessageBox from '../component/MessageBox';
import LoadingBox from '../component/LoadingBox';
import { useDispatch, useSelector } from 'react-redux';
import { listRooms } from '../actions/roomActions';
export default function HomeScreen() {
  const roomList = useSelector(state => state.roomList)
  const {loading, error, rooms} = roomList;
  const dispatch = useDispatch();
  /**const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);**/
  /**useEffect(() => {
    const fecthData = async () => {
      try{
        setLoading(true);
        const { data } = await axios.get('/api/rooms');
        setLoading(false);
        setRooms(data);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fecthData()
  }, [])
  **/
 useEffect(() => {
   dispatch(listRooms());
 }, [dispatch])
    return (
        <div>
          { loading ? (<LoadingBox></LoadingBox>)
            :
              error ? (
                <MessageBox variant="danger">{error}</MessageBox>
                )
                  :(
                <div className="row center">
                  {rooms.map((room) => (
                    <Room key={room._id} room={room}></Room>
                  ))}
                </div> )
            
          }
        
        </div>
    )
}
