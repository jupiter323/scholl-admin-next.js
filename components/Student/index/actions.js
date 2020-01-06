import {
    FETCH_STUDENTS,
    SET_STUDENTS,
    SEARCH_STUDENTS,
    CREATE_STUDENT,
    DELETE_STUDENT,
    UPDATE_STUDENT_ADDRESS,
    UPDATE_STUDENT_CITY,
    UPDATE_STUDENT_EMAIL,
    UPDATE_STUDENT_FIRSTNAME,
    UPDATE_STUDENT_LASTNAME,
    UPDATE_STUDENT_PHONE,
    UPDATE_STUDENT_STATE,
    UPDATE_STUDENT_ZIP,
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

export function updateStudentAddress(address) {
    return {
        type: UPDATE_STUDENT_ADDRESS,
        address,
    }
}

export function updateStudentCity(city) {
    return {
        type: UPDATE_STUDENT_CITY,
        city,
    }
}

export function updateStudentEmail(email) {
    return {
        type: UPDATE_STUDENT_EMAIL,
        email,
    }
}

export function updateStudentFirstName(firstName) {
    return {
        type: UPDATE_STUDENT_FIRSTNAME,
        firstName,
    }
}

export function updateStudentLastName(lastName) {
    return {
        type: UPDATE_STUDENT_LASTNAME,
        lastName,
    }
}

export function updateStudentPhone(phone) {
    return {
        type: UPDATE_STUDENT_PHONE,
        phone,
    }
}


export function updateStudentState(state) {
    return {
        type: UPDATE_STUDENT_STATE,
        state,
    }
}

export function updateStudentZip(zip) {
    return {
        type: UPDATE_STUDENT_ZIP,
        zip,
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