// import { ThunkDispatch } from 'redux-thunk';
// import _ from 'lodash';
// import * as actionTypes from 'store/action-types';

// import { Action, State, NotificationStateProps, ModalActions, SelectOptions } from './interface';

// let timer: NodeJS.Timeout;

// /**
//  * create action creator
//  * @param ACTION - type of action
//  * @param data - data
//  */
// export const createAction = (ACTION: string, data: any = null): Action => ({
//     type: ACTION,
//     payload: data
// });

// /**
//  * create loading selector
//  * @param actions - actions to dispatch
//  */
// export const createLoadingSelector = (actions: string[]) => (state: State) =>
//     // returns true only when all actions is not loading
//     _(actions).some((action: string) => _.get(state, `loading.api.${action}`))
//     ;

// /**
//  * create error selector
//  * @param actions - actions to dispatch
//  */
// export const createErrorMessageSelector = (actions: string[]) => (state: State) =>
//     // returns the first error messages for actions
//     // * We assume when any request fails on a page that
//     //   requires multiple API calls, we shows the first error
//     _(actions)
//         .map((action: string) => _.get(state, `error.api.${action}`))
//         .compact()
//         .first() || ''
//     ;

// /**
//  * dispatch action after given time (to handle some events like close modal after success api call)
//  * @param dispatch - dispatch object
//  * @param action - action type
//  * @param time - time after which action is to be dispatched (default - 100ms)
//  */
// export const dispatchActionAfterTime = (dispatch: ThunkDispatch<{}, {}, Action>, action: string, time: number = 100) => {
//     setTimeout(() => {
//         dispatch(createAction(action));
//     }, time);
// };

// /**
//  * returns actions to dispatch to add the notification
//  * @param dispatch - dispatch object
//  */
// export const getNotificationProps = (dispatch: ThunkDispatch<{}, {}, Action>): NotificationStateProps => ({
//     addNotification: (message: string, type: string) => dispatch(createAction(actionTypes.ADD_NOTIFICATION, { message, type }))
// });

// export const validateImage = (file: File) => {
//     if (file.type.includes('image') && !file.type.includes('gif')) {
//         return true;
//     } else {
//         return false;
//     }
// };

// /**
//  * returns actions to dispatch to open/close modal popup
//  * @param dispatch - dispatch object
//  */
// export const getModalActions = (dispatch: ThunkDispatch<{}, {}, Action>): ModalActions => ({
//     openModal: modalType => dispatch(createAction(actionTypes.OPEN_MODAL, modalType)),
//     closeModal: () => dispatch(createAction(actionTypes.CLOSE_MODAL))
// });

// export const debounce = (func: any, wait = 500) => {
//     let h: NodeJS.Timeout;
//     return (...args: any) => {
//         clearTimeout(h);
//         h = setTimeout(() => func(...args), wait);
//     };
// };

// export const parseQuery = (queryString: string) => {
//     const query: any = {};
//     const pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&');
//     for (let i = 0; i < pairs.length; i++) {
//         const pair = pairs[i].split('=');
//         query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
//     }
//     return query;
// };

// export const customDecodeURI = (url: string) => {
//     let encodedURI = decodeURIComponent(url);
//     encodedURI = encodedURI.replace(/#/g, '%23');
//     return encodedURI;
// };

// export const resetTimer = () => {
//     clearTimeout(timer);
// };

// export const convertDropdownValueToArray = (selectedValue: string): SelectOptions[] => {
//     const values = selectedValue.split(',');
//     const data = [];
//     for (const value of values) {
//         const temp = {
//             label: value,
//             value: value
//         };
//         data.push(temp);
//     }
//     return data;
// };

// export const formatChips = (chips: number) => `${Number(chips.toFixed(0)).toLocaleString('de-DE')}`;
// export const formatPrice = (chips: number) => `${Number(chips.toFixed(2)).toLocaleString('de-DE')}`;

// export const currencyFormatter = new Intl.NumberFormat('eu-EU', {
//     style: 'currency',
//     currency: 'EUR',
//     minimumFractionDigits: 2,
// });

// export const windowScroll = (value: number, position: 'top' | 'bottom' = 'top', behavior: 'auto' | 'smooth' = 'smooth') => window.scrollTo({
//     [position]: value,
//     behavior: behavior
// });

