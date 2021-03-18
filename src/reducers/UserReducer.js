
import { LOGIN, LOGOUT } from '../common/ActionType';

let initialState = {
    isLoggedIn: false
};

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return Object.assign({}, state, {
              isLoggedIn: true
            });
        case LOGOUT:
            return Object.assign({}, state, {
              isLoggedIn: false
            });
        default:
            return state;
    }
};

export default UserReducer;
