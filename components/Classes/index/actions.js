import {
    SET_ASSIGN_LESSONS_MODAL_OPEN,
    SET_ASSIGN_WORKSHEETS_MODAL_OPEN,
} from './constants';


export function setAssignLessonsModalOpen(value){
    return {
        type:SET_ASSIGN_LESSONS_MODAL_OPEN,
        value
    }
}

export function setAssignWorksheetModalOpen(value){
    return {
        type:SET_ASSIGN_WORKSHEETS_MODAL_OPEN,
        value
    }
}