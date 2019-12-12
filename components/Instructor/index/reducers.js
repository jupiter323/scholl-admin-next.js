import { fromJS } from 'immutable';

import {
    SET_INSTRUCTORS,
} from './constants';


const initialState = fromJS({
    instructors:[],
});

function instructorReducer(initialState,action){
    switch(action.type){
        case SET_INSTRUCTORS:
            return state.set('instructors',action.instructors);
        default:
            return state;
    }
}

export default instructorReducer;