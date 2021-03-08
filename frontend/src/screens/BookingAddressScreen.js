import React, { useState } from 'react'
import CheckoutSteps from '../component/CheckoutSteps'
import { useDispatch, useSelector } from 'react-redux';
import { saveBookingAddress } from '../actions/cartActions';

export default function BookingAddressScreen(props) {
    const cart = useSelector((state) => state.cart);
    const {bookingAddress} = cart
    
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    if(!userInfo){
        props.history.push('/signin')
    }
    const [fullName, setFullName] = useState(bookingAddress.fullName)
    const [address, setAddress] = useState(bookingAddress.address)
    const [city, setCity] = useState(bookingAddress.city)
    const [postalCode, setPostalCode] = useState(bookingAddress.postalCode)
    const [country, setCountry] = useState(bookingAddress.country)
    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(saveBookingAddress({fullName, address, city, postalCode, country})
        );
        props.history.push('/payment');

    }
    return (
        <div>
            <CheckoutSteps step1 step2></CheckoutSteps>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Customer Booking Address</h1>
                </div>
                <div>
                   <label htmlFor="fullName">Full Name</label>
                   <input type="text" id="fullName" placeholder="Enter full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} required></input>
                </div>
                <div>
                   <label htmlFor="address">Address</label>
                   <input type="text" id="Address" placeholder="Enter address" value={address} onChange={(e) => setAddress(e.target.value)} required></input>
                </div>
                <div>
                   <label htmlFor="city">City</label>
                   <input type="text" id="city" placeholder="Enter city" value={city} onChange={(e) => setCity(e.target.value)} required></input>
                </div>
                <div>
                   <label htmlFor="postalCode">Postal Code</label>
                   <input type="text" id="postalCode" placeholder="Enter postal code" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} required></input>
                 </div>
                <div>
                   <label htmlFor="country">country</label>
                   <input type="text" id="country" placeholder="Enter country" value={country} onChange={(e) => setCountry(e.target.value)} required></input>
                </div>
                <div>
                    <label />
                    <button className="primary" type="submit">Continue</button>
                </div>

            </form>
        </div>
    )
}
