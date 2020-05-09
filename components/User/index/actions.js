import {
    SET_USER_IS_LOGGED,
    FETCH_CURRENT_USER
} from './constants';

export function setUserIsLogged(value){
    return {
        type:SET_USER_IS_LOGGED,
        value,
    }
}

export function getCurrentUser(value){
    return {
        type:FETCH_CURRENT_USER,
        value,
    }
}