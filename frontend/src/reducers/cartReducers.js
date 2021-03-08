import { CART_ADD_ITEM, CART_EMPTY, CART_REMOVE_ITEM, CART_SAVE_BOOKING_ADDRESS, CART_SAVE_PAYMENT_METHOD } from "../constants/cartConstants";

export const cartReducer = (state = {cartItems: []}, action) => {
    switch(action.type){
        case CART_ADD_ITEM:
            const item = action.payload;
            const existItem = state.cartItems.find(x => x.room === item.room)
            if(existItem){
                return {
                    ...state,
                    cartItems: state.cartItems.map((x) =>
                    x.room === existItem.room? item : x),
                }
            } else{
                return {...state, cartItems: [...state.cartItems, item]};
            }
        case CART_REMOVE_ITEM:
            return {...state, cartItems: state.cartItems.filter((x) => x.room !== action.payload)}
        case CART_SAVE_BOOKING_ADDRESS:
            return{...state, bookingAddress: action.payload}
        case CART_SAVE_PAYMENT_METHOD:
            return {...state, paymentMethod: action.payload}
        case CART_EMPTY:
            return { ...state, cartItems: [] };
        default:
            return state;
    }
}