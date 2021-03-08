import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_BOOKING_ADDRESS } from "../constants/cartConstants";
import Axios from 'axios'


export const addToCart = (roomId, qty) => async(dispatch, getState) => {
    const {data} = await Axios.get(`/api/rooms/${roomId}`);
    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            name: data.name,
            image: data.image,
            price: data.price,
            roomsAvailable: data.roomsAvailable,
            room: data._id,
            qty,
        }
    });
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
}
export const removeFromCart = (roomId) => (dispatch, getState) => {
    dispatch({ type: CART_REMOVE_ITEM, payload: roomId});
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
}
export const saveBookingAddress = (data) => (dispatch) => {
    dispatch({type: CART_SAVE_BOOKING_ADDRESS, payload: data });
    localStorage.setItem('bookingAddress', JSON.stringify(data));
}