import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/cartActions';

export default function CartScreen(props) {

    const roomId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split('=')[1])
    : 1;
    const dispatch = useDispatch()
    useEffect(() => {
        if(roomId){
            dispatch(addToCart(roomId, qty))
        }
    }, [dispatch, roomId, qty])
    return (
        <div>
            <h1>Cart Screen</h1>
            <p>
                ADD TO CART : RoomID: {roomId} Qty: {qty}
            </p>

        </div>
    )
}
