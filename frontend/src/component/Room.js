import React from 'react'
import { Link } from 'react-router-dom'
import Rating from '../component/Rating'
export default function Room(props) {
    const {room} = props
    return (
        <div key={room._id} className="card">
              <Link to={`/room/${room._id}`}>
                <img
                  className="medium"
                  src={room.image}
                  alt={room.name}
                />
              </Link>
              <div className="card-body">
                <Link to={`/room/${room._id}`}>
                  <h2>{room.name}</h2>
                </Link>
                <Rating
                  rating={room.rating}
                  numReviews={room.numReviews}
                ></Rating>
                <div className="price">${room.price}</div>
              </div>
            </div>
    )
}
