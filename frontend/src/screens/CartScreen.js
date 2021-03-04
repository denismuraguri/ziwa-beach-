import React from 'react'

export default function CartScreen(props) {

    const roomId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split('=')[1])
    : 1;

    
    return (
        <div>
            <h1>Cart Screen</h1>
            <p>
                ADD TO CART : RoomID: {roomId} Qty: {qty}
            </p>

        </div>
    )
}
