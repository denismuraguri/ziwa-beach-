import { ROOMS_DETAILS_FAIL, ROOMS_DETAILS_REQUEST, ROOMS_DETAILS_SUCCESS, ROOMS_LIST_FAIL, ROOMS_LIST_REQUEST, ROOMS_LIST_SUCCESS } from "../constants/roomConstants";

export const roomListReducer = (state= {loading: true,rooms: []}, action) => {
    switch(action.type){
        case ROOMS_LIST_REQUEST:
            return {loading: true}
        case ROOMS_LIST_SUCCESS:
            return{loading: false, rooms: action.payload};
        case ROOMS_LIST_FAIL:
            return {loading: false, error: action.payload}

        default:
            return state
    }
}
export const roomDetailsReducer = ( state = { room: {}, loading: true}, action) => 
{
    switch (action.type){
        case ROOMS_DETAILS_REQUEST:
            return {loading: true};
        case ROOMS_DETAILS_SUCCESS:
            return { loading: false, room: action.payload};
        case ROOMS_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};