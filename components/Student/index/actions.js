import {
    FETCH_STUDENTS,
    SET_STUDENTS,
    SEARCH_STUDENTS,
    CREATE_STUDENT,
    DELETE_STUDENT,
    SET_STUDENTS_CALENDAR_ASSIGN_LESSONS_MODAL_OPEN,
    SET_STUDENTS_CALENDAR_ASSIGN_WORKSHEETS_MODAL_OPEN,
    SET_STUDENTS_CALENDAR_CALENDAR_ROWS,
} from './constants';

export function fetchStudents() {
    return {
        type: FETCH_STUDENTS,
    }
}

export function searchStudents(filters) {
    return {
        type: SEARCH_STUDENTS,
        filters,
    }
}

export function setStudents(students) {
    return {
        type: SET_STUDENTS,
        students,
    }
}

export function createStudent(student) {
    return {
        type: CREATE_STUDENT,
        student,
    }
}

export function deleteStudent(id) {
    return {
        type: DELETE_STUDENT,
        id,
    }
}

export function setAssignLessonsModalOpen(value){
    return {
        type:SET_STUDENTS_CALENDAR_ASSIGN_LESSONS_MODAL_OPEN,
        value,
    }
}

export function setAssignWorksheetModalOpen(value){
    return {
        type:SET_STUDENTS_CALENDAR_ASSIGN_WORKSHEETS_MODAL_OPEN,
        value,
    }
}

export function setCalendarRows(rows){
    return {
        type:SET_STUDENTS_CALENDAR_CALENDAR_ROWS,
        rows,
    }
}