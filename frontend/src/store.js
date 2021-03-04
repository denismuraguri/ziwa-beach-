import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
//import data from './data'
import thunk from "redux-thunk"
import { roomDetailsReducer, roomListReducer } from './reducers/roomReducers';
const initialState  = {};

const reducer = combineReducers({
    roomList: roomListReducer,
    roomDetails: roomDetailsReducer,
})
/**const reducer = (state, action) => {
    return {rooms: data.rooms};
}**/
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)))

export default store;