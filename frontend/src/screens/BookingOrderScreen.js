import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import CheckoutSteps from '../component/CheckoutSteps'

export default function BookingOrderScreen(props) {
    const cart = useSelector((state) => state.cart);
    if (!cart.paymentMethod){
        props.history.push('/payment')
    }
    const toPrice = (num) => Number(num.toFixed(2)); // 5.123 => "5.12" => 5.12
    cart.roomsPrice = toPrice(
        cart.cartItems.reduce((a, c) => a + c.qty * c.price, 0)
      );
    cart.taxPrice = toPrice(0.15 * cart.roomsPrice);
    cart.totalPrice = cart.roomsPrice + cart.taxPrice;
    const placeOrderHandler = () => {
        //To do: dispatch place order action
    }
    return (
        <div>
            <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
            <div className="row top">
                <div className="col-2">
                    <ul>
                        <li>
                            <div className="card card-body">
                                <h2>
                                    Booking
                                </h2>
                                <p>
                                <strong>Name:{" "}</strong> {cart.bookingAddress.fullName}  <br />
                                <strong>Address: {" "}</strong>{cart.bookingAddress.address}, 
                                {cart.bookingAddress.postalCode},
                                {cart.bookingAddress.country}
                                </p>

                            </div>
                        </li>
                
                    
                        <li>
                            <div className="card card-body">
                                <h2>
                                    Payment
                                </h2>
                                <p>
                                <strong>Method:{" "}</strong> {cart.paymentMethod}  <br />
                                
                                </p>

                            </div>
                        </li>
                        <li>
                            <div className="card card-body">
                                <h2>
                                    Booking Rooms
                                </h2>
                                <ul>
                            {
                                cart.cartItems.map((item) => (
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
                            <h2>Booking Summary</h2>
                        </li>
                        <li>
                            <div className="row">
                            <div>Rooms</div>
                            <div>${cart.roomsPrice.toFixed(2)}</div>
                            </div>
                        </li>  
                        <li>
                            <div className="row">
                            <div>Tax</div>
                            <div>${cart.taxPrice.toFixed(2)}</div>
                            </div>
                        </li>
                        <li>
                            <div className="row">
                                <div>
                                    <strong> Booking Total Price</strong>
                                </div>
                                <div>
                                    <strong>${cart.totalPrice.toFixed(2)}</strong>
                                </div>
                            </div>
                        </li>
                        <li>
                        <button
                            type="button"
                            onClick={placeOrderHandler}
                            className="primary block"
                            disabled={cart.cartItems.length === 0}
                            >
                            Place Booking
                        </button>

                        </li>
                        

                        </ul> 
                    </div>

                </div>
            </div>
        </div>
    )
}
