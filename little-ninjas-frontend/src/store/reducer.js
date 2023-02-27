// import { combineReducers } from 'redux';

// import { Action, State } from 'shared/interface';
// import { resetTimer } from 'shared/utility';

// import notification from './notificationReducer';
// import loading from './loadingReducer';
// import error from './errorReducer';
// import modal from './modalReducer';

// const appReducer = combineReducers({
//     notification: notification,
//     loading: loading,
//     error: error,
//     modal: modal,
// });

// const rootReducer = (state: State | undefined, action: Action) => {
//     if (action.type === 'LOGOUT') {
//         state = undefined;
//         resetTimer();
//     }
//     return appReducer(state, action);
// };

// export default rootReducer;
