import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { detailsRoom } from '../actions/roomActions';
import LoadingBox from '../component/LoadingBox';
import MessageBox from '../component/MessageBox';
import Rating from '../component/Rating';
//import data from '../data';

export default function RoomScreen(props) {
  //const room = data.rooms.find((x) => x._id === props.match.params.id);
  const [qty, setQty] = useState(1);

  const roomDetails = useSelector((state) => state.roomDetails);
  const {loading, error, room} = roomDetails;
  const dispatch = useDispatch();
  const roomId = props.match.params.id;
  useEffect(() => {
    dispatch(detailsRoom(roomId))
    
  }, [dispatch,roomId]);
  const addToCartHandler = () => {
    props.history.push(`/cart/${roomId}?qty=${qty}`)
  }
  
  /**if (!room) {
    return <div> Room Not Found</div>;
  }**/
  return (
    <div>
          { loading ? (<LoadingBox></LoadingBox>)
            :
              error ? (
                <MessageBox variant="danger">{error}</MessageBox>
                )
                  :(

                    <div>
                          <Link to="/">Back to result</Link>
                          <div className="row top">
                            <div className="col-2">
                              <img className="large" src={room.image} alt={room.name}></img>
                            </div>
                            <div className="col-1">
                              <ul>
                                <li>
                                  <h1>{room.name}</h1>
                                </li>
                                <li>
                                  Type: {room.type}
                                </li>
                                <li>
                                  <Rating
                                    rating={room.rating}
                                    numReviews={room.numReviews}
                                  ></Rating>
                                </li>
                                <li>Price : ${room.price}</li>
                                <li>
                                    Size : {room.size}
                                </li>
                                <li>
                                  Pets : {room.pets}
                                </li>
                                <li>Breakfast : {room.breakfast}</li>
                                <li>
                                  Description:
                                  <p>{room.description}</p>
                                </li>
                              </ul>
                            </div>
                            <div className="col-1">
                              <div className="card card-body">
                                <ul>
                                  <li>
                                    <div className="row">
                                      <div>Price</div>
                                      <div className="price">${room.price}</div>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="row">
                                      <div>Status</div>
                                      <div>
                                        {room.roomsAvailable > 0 ? (
                                          <span className="success">Available</span>
                                        ) : (
                                          <span className="danger">Unavailable</span>
                                        )}
                                      </div>
                                    </div>
                                  </li>
                                  {
                                    room.roomsAvailable > 0 && (
                                      <>
                                      <li>
                                        <div>
                                          <div className="row">
                                            <div>
                                              Room Available
                                            </div>
                                            <select value={qty} onChange={e => setQty(e.target.value)}>
                                              {
                                                [...Array(room.roomsAvailable).keys()].map(x => (
                                                  <option key={x+1} value={x+1}>{x+1}</option>                                                
                                                ))
                                              }
                                            </select>
                                          </div>
                                        </div>
                                      </li>
                                        <li>
                                          <button onClick={addToCartHandler} className="primary block">Add to Cart</button>
                                        </li>
                                      </>

                                      
                                    )
                                  }
                                  
                                </ul>
                              </div>
                            </div>
                          </div>
                    </div>
                    
                  )
            
          }
        
        </div>




    
    
    
  );
}