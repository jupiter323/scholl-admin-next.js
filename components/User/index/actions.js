import {
    SET_USER_IS_LOGGED,
} from './constants';

export function setUserIsLogged(value){
    return {
        type:SET_USER_IS_LOGGED,
        value,
    }
}