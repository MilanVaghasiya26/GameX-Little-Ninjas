import { Action, Notification } from 'shared/interface';
import * as actionTypes from './action-types';

const initialState = {
    type: '',
    message: ''
};

const reducer = (state = initialState, action ) => {
    switch (action.type) {
        case actionTypes.ADD_NOTIFICATION:
            return {
                type: action.payload.type,
                message: action.payload.message
            };
        case actionTypes.REMOVE_NOTIFICATION:
            return {
                type: '',
                message: ''
            };
        default:
            return state;
    }
};

export default reducer;
