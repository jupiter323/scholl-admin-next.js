import { fromJS } from "immutable";
import {
    SET_USER_IS_LOGGED
} from './constants';

const initialState = fromJS({
    isLogged:false,
});

function userReducer(state = initialState,action){
    switch (action.type){
        case SET_USER_IS_LOGGED:
            return state.set('isLogged',action.value);
        default:
            return state;
    }
}

export default userReducer;

