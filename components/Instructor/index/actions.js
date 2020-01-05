import {
  SET_INSTRUCTORS,
  FETCH_INSTRUCTORS,
} from './constants';

export function setInstructors(instructors) {
  return {
    type: SET_INSTRUCTORS,
    instructors,
  };
}

export function fetchInstructors() {
  return {
    type: FETCH_INSTRUCTORS,
  };
}
