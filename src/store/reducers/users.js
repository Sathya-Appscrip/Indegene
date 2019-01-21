import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    userData: [],
};

const updateUserList = (state, action) => {
    return updateObject(state, { userData: action.userData })
}


const deleteUser = (state, action) => {
    return updateObject(state, { userData: action.updatedData })
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_USERS: return updateUserList(state, action);
        case actionTypes.DEL_USERS: return deleteUser(state, action);
        default:
            return state;
    }
};

export default reducer;