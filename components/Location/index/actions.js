import {
  FETCH_ALL_LOCATIONS,
  SET_ALL_LOCATIONS,
} from "./constants";

export function fetchAllLocationns(user_id) {
  return {
    type: FETCH_ALL_LOCATIONS,
    user_id,
  };
}

export function setLocations(locations) {
  return {
    type: SET_ALL_LOCATIONS,
    locations,
  };
}
