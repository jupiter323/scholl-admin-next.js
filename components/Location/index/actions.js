import {
    FETCH_ALL_LOCATIONS,
    SET_ALL_LOCATIONS
} from "./constants";

export function fetchAllLocationns() {
    return {
        type: FETCH_ALL_LOCATIONS,
    }
}

export function setLocations(locations) {
    return {
        type: SET_ALL_LOCATIONS,
        locations
    };
}
