import { REMOVE_ALERT, SET_ALERT } from '../actions/types';


const initialState = [];

export default function alert (state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case SET_ALERT:
            return [...state, payload];
        case REMOVE_ALERT:
            return state.filter(alert => alert.id !== action.payload);
        default:
            return state;
    }
}