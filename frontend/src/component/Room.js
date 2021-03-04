import React from 'react'
import Rating from '../component/Rating'
export default function Room(props) {
    const {room} = props
    return (
        <div key={room._id} className="card">
              <a href={`/room/${room._id}`}>
                <img
                  className="medium"
                  src={room.image}
                  alt={room.name}
                />
              </a>
              <div className="card-body">
                <a href={`/room/${room._id}`}>
                  <h2>{room.name}</h2>
                </a>
                <Rating
                  rating={room.rating}
                  numReviews={room.numReviews}
                ></Rating>
                <div className="price">${room.price}</div>
              </div>
            </div>
    )
}
