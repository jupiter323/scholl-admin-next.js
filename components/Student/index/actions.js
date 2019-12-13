import {FETCH_STUDENTS, SET_STUDENTS, ADD_STUDENT} from './constants';

export function fetchStudents() {
    return {
        type: FETCH_STUDENTS,
    }
}

export function setStudents(students) {
    return {
        type: SET_STUDENTS,
        students,
    }
}

export function addStudent(student) {
    return {
        type: ADD_STUDENT,
        student,
    }
}