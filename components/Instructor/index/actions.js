import {
  SET_INSTRUCTORS,
} from './constants';

export function setInstructors(instructors) {
  return {
    type: SET_INSTRUCTORS,
    instructors,
  };
}
