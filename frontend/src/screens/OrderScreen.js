import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { detailsOrder, payOrder } from '../actions/orderActions';
import LoadingBox from '../component/LoadingBox';
import MessageBox from '../component/MessageBox';
import Axios from "axios"
import {PayPalButton} from 'react-paypal-button-v2'
import { ORDER_PAY_RESET } from '../constants/orderConstants';


export default function OrderScreen(props) {
    const orderPay = useSelector(state => state.orderPay)
    const {loading: loadingPay, error: errorPay, success: successPay} = orderPay
    const [sdkReady, setSdkReady] = useState(false)
    const orderId = props.match.params.id;
    const orderDetails = useSelector((state) => state.orderDetails);
    const { order, loading, error } = orderDetails;
    const dispatch = useDispatch()
    useEffect(() => {
        const addPayPalScript = async () => {
            const { data } = await Axios.get('/api/config/paypal');
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = `https://www.paypal.com/sdk/js?client-id=${data}`;
            script.async = true;
            script.onload = () => {
                setSdkReady(true);
            };
            document.body.appendChild(script);            
        } 
        if (!order ||     
            successPay ||
            (order && order._id !== orderId))
            {
            dispatch({ type: ORDER_PAY_RESET });
            dispatch(detailsOrder(orderId))

        } else {
            if(!order.isPaid){
                if(!window.paypal) {
                    addPayPalScript();
                } else{
                    setSdkReady(true);
                }
            }  
        }
    }, [dispatch, order, orderId, sdkReady, successPay]);
      
    const successPaymentHandler = (paymentResult) => {
        dispatch(payOrder(order, paymentResult));
    };
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
                        {
                            !order.isPaid && (
                                <li>
                                    {!sdkReady? (<LoadingBox></LoadingBox>):
                                    (
                                        <>
                                            {errorPay && (<MessageBox variant="danger">{error.pay}</MessageBox>)}
                                            {loadingPay && <LoadingBox></LoadingBox>}
                                            <PayPalButton
                                                amount={order.totalPrice}
                                                onSuccess={successPaymentHandler}
                                            ></PayPalButton>
                                        </>
                                                                        )
                                    }
                                </li>
                            )
                        }
                        </ul> 
                    </div>

                </div>
            </div>
        </div>
    )
}
