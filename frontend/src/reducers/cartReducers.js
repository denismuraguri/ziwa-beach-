import { CART_ADD_ITEM } from "../constants/cartConstants";

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
        default:
            return state;
    }
}