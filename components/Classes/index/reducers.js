import { fromJS } from 'immutable';

import {
    SET_ASSIGN_LESSONS_MODAL_OPEN,
    SET_ASSIGN_WORKSHEETS_MODAL_OPEN,
    SET_CALENDAR_ROWS,
} from './constants';


const initialState = fromJS({
    assignLessonsModalOpen:false,
    assignWorkSheetsModalOpen:false,
    calendarRows:[],
});

function classesReducer(state = initialState,action){
    switch(action.type){
        case SET_ASSIGN_LESSONS_MODAL_OPEN:
            return state.set('assignLessonsModalOpen',action.value);
        case SET_ASSIGN_WORKSHEETS_MODAL_OPEN:
            return state.set('assignWorkSheetsModalOpen',action.value);
        case SET_CALENDAR_ROWS:
            return state.set('calendarRows',action.rows);
        default:
            return state;
    }
}

export default classesReducer;