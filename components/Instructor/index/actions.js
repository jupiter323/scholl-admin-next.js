import {
    SET_INSTRUCTORS,
    UPDATE_INSTRUCTOR_FIRSTNAME,
    UPDATE_INSTRUCTOR_LASTNAME,
    UPDATE_INSTRUCTOR_EMAIL,
    UPDATE_INSTRUCTOR_STATE,
    UPDATE_INSTRUCTOR_CITY,
    UPDATE_INSTRUCTOR_ZIP,
    UPDATE_INSTRUCTOR_ADDRESS,
    UPDATE_INSTRUCTOR_PHONE,
    ADD_INSTRUCTOR_LOCATION,
} from './constants';

export function setInstructors(instructors){
    return{
        type:SET_INSTRUCTORS,
        instructors,
    }
}

export function updateInstructorFirstName(value) {
    return {
        type: UPDATE_INSTRUCTOR_FIRSTNAME,
        value,
    }
}

export function updateInstructorLastName(value) {
    return {
        type: UPDATE_INSTRUCTOR_LASTNAME,
        value,
    }
}

export function updateInstructorEmail(value) {
    return {
        type: UPDATE_INSTRUCTOR_EMAIL,
        value,
    }
}

export function updateInstructorState(value) {
    return {
        type: UPDATE_INSTRUCTOR_STATE,
        value,
    }
}

export function updateInstructorCity(value) {
    return {
        type: UPDATE_INSTRUCTOR_CITY,
        value,
    }
}

export function updateInstructorZip(value) {
    return {
        type: UPDATE_INSTRUCTOR_ZIP,
        value,
    }
}

export function updateInstructorAddress(value) {
    return {
        type: UPDATE_INSTRUCTOR_ADDRESS,
        value,
    }
}

export function updateInstructorPhone(value) {
    return {
        type: UPDATE_INSTRUCTOR_PHONE,
        value,
    }
}

export function AddInstructorToLocation(value) {
    return {
        type: ADD_INSTRUCTOR_LOCATION,
        value,
    }
}