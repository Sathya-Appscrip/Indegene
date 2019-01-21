import * as actionTypes from './actionTypes';
import { updateObject } from '../utility';

const userList = require('../../sample.json');


export const getUsers = () => {
    return {
        type: actionTypes.GET_USERS,
        userData: userList
    };
};


export const updateUsers = (userArray, data) => {
    let index = userArray.findIndex((item) => item.id == data.id);
    if (index >= 0) {

        let newArray = userArray;
        newArray[index] = data;
        return {
            type: actionTypes.EDIT_USERS,
            userData: newArray
        };

    } else {

        userArray.push(data);
        return {
            type: actionTypes.GET_USERS,
            userData: userArray
        };
    }
};

export const deleteUsers = (data) => {
    return {
        type: actionTypes.DEL_USERS,
        updatedData: data
    };
};
