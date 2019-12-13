import {FETCH_STUDENTS, SET_STUDETNS} from './constants';

export function fetchStudents() {
    return {
        type: FETCH_STUDENTS,
    }
}

export function setStudents(students) {
    return {
        type: SET_STUDETNS,
        students,
    }
}