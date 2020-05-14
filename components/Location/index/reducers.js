import { fromJS } from "immutable";
import {
  SET_ALL_LOCATIONS,
} from "./constants";

const initialState = fromJS({
  locations: [],
});

function locationsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ALL_LOCATIONS:
      return state.set("locations", action.payload);
    default:
      return state;
  }
}

export default locationsReducer;
