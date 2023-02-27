import { Action, ModalState } from 'shared/interface';
import * as actionTypes from './action-types';

const initialState: ModalState = {
    isModalOpen: false,
    modalType: ''
};

const reducer = (state: ModalState = initialState, action: Action) => {
    switch (action.type) {
        case actionTypes.OPEN_MODAL:
            return {
                isModalOpen: true,
                modalType: action.payload
            };
        case actionTypes.CLOSE_MODAL:
            return {
                isModalOpen: false,
                modalType: ''
            };
        default:
            return state;
    }
};

export default reducer;
