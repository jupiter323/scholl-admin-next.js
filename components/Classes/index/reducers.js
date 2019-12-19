import { fromJS } from 'immutable';

import {
    SET_ASSIGN_LESSONS_MODAL_OPEN,
    SET_ASSIGN_WORKSHEETS_MODAL_OPEN,
} from './constants';


const initialState = fromJS({
    assignLessonsModalOpen:false,
    assignWorkSheetsModalOpen:false,
});

function classesReducer(state = initialState,action){
    switch(action.type){
        case SET_ASSIGN_LESSONS_MODAL_OPEN:
            return state.set('assignLessonsModalOpen',action.value);
        case SET_ASSIGN_WORKSHEETS_MODAL_OPEN:
            return state.set('assignWorkSheetsModalOpen',action.value);
        default:
            return state;
    }
}

export default classesReducer;