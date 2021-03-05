import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../actions/cartActions';
import MessageBox from '../component/MessageBox';

export default function CartScreen(props) {

    const roomId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split('=')[1])
    : 1;
    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;
    const dispatch = useDispatch()
    useEffect(() => {
        if(roomId){
            dispatch(addToCart(roomId, qty))
        }
    }, [dispatch, roomId, qty]);
    const removeFromCartHandler = ( id ) => {
        dispatch(removeFromCart(id));
    }
    const checkoutHandler = ( id ) => {
        props.history.push("/signin?redirect=shipping")
    }
    return (
        <div className="row top">
            <div className="col-1">
                <h1>Rooms Booked</h1>
                {cartItems.length === 0?<MessageBox>
                    Cart is Empty. <Link to="/">Go Book Rooms</Link>
                </MessageBox>
                :
                (
                    <ul>
                        {
                            cartItems.map((item) => (
                                <li key={item.room}>
                                    <div className="row">
                                        <div>
                                            <img src={item.image} alt={item.name} className="small"></img>
                                        </div>
                                        <div className="min-30">
                                            <Link to={`/room/${item.room}`}>{item.name}</Link>
                                        </div>
                                        <div>
                                           
                                            <select
                                                value={item.qty}
                                                onChange={(e) =>
                                                    dispatch(
                                                    addToCart(item.room, Number(e.target.value))
                                                    )
                                                }
                                                >
                                                {[...Array(item.roomsAvailable).keys()].map((x) => (
                                                    <option key={x + 1} value={x + 1}>
                                                    {x + 1}
                                                    </option>
                                                ))}
                                            </select>

                                        </div>
                                        <div>{item.price}</div>
                                        <div>
                                            <button type="button" onClick={() => removeFromCartHandler(item.room)}>Delete</button>
                                        </div>
                                    </div>
                                </li>
                            )
                            )
                        }
                    </ul>
                )
                }
            </div>
            <div className="col-1">
                <div className="card card-body">
                    <ul>
                        <li>
                        <h2>
                            Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)} items) : $
                            {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
                        </h2>
                        </li>
                        <li>
                            <button type="button" onClick={checkoutHandler} className="primary block" disabled={cartItems.length === 0}>Proceed to Checkout</button>
                        </li>

                    </ul>
                </div>
            
            </div>

        </div>
    )
}
