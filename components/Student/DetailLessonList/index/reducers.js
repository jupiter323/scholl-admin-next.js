import { FETCH_LESSON_LIST, FETCH_LESSON_LIST_SUCCESS, FETCH_LESSON_LIST_FAIL } from "./constants";


const initialState = {
  lessonList: [],
  isLoading: false,
  error: null,
};

const lessonListReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_LESSON_LIST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_LESSON_LIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        lessonList: action.payload,
      };
    case FETCH_LESSON_LIST_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default: return state;
  }
};

export default lessonListReducer;
