import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { detailsOrder } from '../actions/orderActions';
import LoadingBox from '../component/LoadingBox';
import MessageBox from '../component/MessageBox';


export default function OrderScreen(props) {
    const orderId = props.match.params.id;
    const orderDetails = useSelector((state) => state.orderDetails);
    const { order, loading, error } = orderDetails;
    const dispatch = useDispatch()
    useEffect(() => {
       dispatch(detailsOrder(orderId))
      }, [dispatch, orderId]);
    return loading ? (
        <LoadingBox></LoadingBox>
        ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ) : (        
        <div>
            <h1>Order {order._id}</h1>
            <div className="row top">
                <div className="col-2">
                    <ul>
                        <li>
                            <div className="card card-body">
                                <h2>
                                    Booking
                                </h2>
                                <p>
                                <strong>Name:{" "}</strong> {order.bookingAddress.fullName}  <br />
                                <strong>Address: {" "}</strong>{order.bookingAddress.address}, 
                                {order.bookingAddress.postalCode},
                                {order.bookingAddress.country}
                                </p>
                                {/**{order.isDelivered ? (
                                 <MessageBox variant="success">
                                    Delivered at {order.deliveredAt}
                                </MessageBox>
                                ) : (
                                <MessageBox variant="danger">Not Delivered</MessageBox>
                                )} */}

                            </div>
                        </li>
                
                    
                        <li>
                            <div className="card card-body">
                                <h2>
                                    Payment
                                </h2>
                                <p>
                                <strong>Method:{" "}</strong> {order.paymentMethod}  <br />
                                
                                </p>
                                {order.isPaid ? (
                                <MessageBox variant="success">
                                    Paid at {order.paidAt}
                                </MessageBox>
                                ) : (
                                <MessageBox variant="danger">Not Paid</MessageBox>
                                )}

                            </div>
                        </li>
                        <li>
                            <div className="card card-body">
                                <h2>
                                    Order Items
                                </h2>
                                <ul>
                            {
                                order.orderItems.map((item) => (
                                    <li key={item.room}>
                                        <div className="row">
                                            <div>
                                                <img src={item.image} alt={item.name} className="small"></img>
                                            </div>
                                            <div className="min-30">
                                                <Link to={`/room/${item.room}`}>{item.name}</Link>
                                            </div>
                                            
                                            <div>{item.qty} * ${item.price} = ${item.qty * item.price}</div>
                                            
                                        </div>
                                    </li>
                                )
                                )
                            }
                        </ul>
                                

                            </div>
                        </li>
                    </ul>
                </div>
                <div className="col-1">
                    <div className="card card-body">
                    <ul>
                        <li>
                            <h2>Order Summary</h2>
                        </li>
                        <li>
                            <div className="row">
                            <div>Rooms Price</div>
                            <div>${order.roomsPrice}</div>
                            </div>
                        </li>  
                        <li>
                            <div className="row">
                            <div>Tax</div>
                            <div>${order.taxPrice}</div>
                            </div>
                        </li>
                        <li>
                            <div className="row">
                                <div>
                                    <strong> Total Booking Price</strong>
                                </div>
                                <div>
                                    <strong>${order.totalPrice}</strong>
                                </div>
                            </div>
                        </li>
                        </ul> 
                    </div>

                </div>
            </div>
        </div>
    )
}
