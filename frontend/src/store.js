import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
//import data from './data'
import thunk from "redux-thunk"
import { cartReducer } from './reducers/cartReducers';
import { roomDetailsReducer, roomListReducer } from './reducers/roomReducers';
const initialState  = {
    cart: {
        cartItems: localStorage.getItem('cartItems')
        ? JSON.parse(localStorage.getItem('cartItems'))
        : [],
    }
};

const reducer = combineReducers({
    roomList: roomListReducer,
    roomDetails: roomDetailsReducer,
    cart: cartReducer,
})
/**const reducer = (state, action) => {
    return {rooms: data.rooms};
}**/
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)))

export default store;