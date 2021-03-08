import Axios from "axios";
import { ROOMS_DETAILS_FAIL, ROOMS_DETAILS_REQUEST, ROOMS_DETAILS_SUCCESS, ROOMS_LIST_FAIL, ROOMS_LIST_REQUEST, ROOMS_LIST_SUCCESS } from "../constants/roomConstants"

export const listRooms = () => async(dispatch) => {
    dispatch({
        type: ROOMS_LIST_REQUEST,
    });
    try {
        const { data } =await Axios.get('/api/rooms');
        dispatch({type: ROOMS_LIST_SUCCESS, payload: data});
    } catch(error){
        dispatch({type: ROOMS_LIST_FAIL, payload: error.message});

    }
    

}

export const detailsRoom = (roomId) => async (dispatch) => {
    dispatch({type: ROOMS_DETAILS_REQUEST, payload: roomId});
    try{
        const {data} = await Axios.get(`/api/rooms/${roomId}`);
        dispatch({type: ROOMS_DETAILS_SUCCESS, payload: data});
    }catch(error){
        dispatch({
            type: ROOMS_DETAILS_FAIL, 
            payload: 
                error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        });
    }
};