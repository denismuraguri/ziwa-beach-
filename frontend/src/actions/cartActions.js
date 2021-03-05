import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";
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