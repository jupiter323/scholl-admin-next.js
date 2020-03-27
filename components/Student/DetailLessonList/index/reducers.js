import {
  FETCH_LESSON_LIST,
  FETCH_LESSON_LIST_SUCCESS,
  FETCH_LESSON_LIST_FAIL,
  CHECKED_LESSON,
  CHECK_ALL_LESSONS,
  UNCHECK_ALL_LESSONS,
} from "./constants";


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
    case CHECKED_LESSON:
      return {
        ...state,
        lessonList: state.lessonList.map((lesson, index) => {
          if (index !== action.index) {
            return lesson;
          }
          return {
            ...lesson,
            selected: !lesson.selected,
          };
        }),
      };

    case CHECK_ALL_LESSONS:
      return {
        ...state,
        lessonList: state.lessonList.map((lesson) => ({
          ...lesson,
          selected: !action.checked,
        })),
      };

    case UNCHECK_ALL_LESSONS:
      return {
        ...state,
        lessonList: state.lessonList.map((lesson) => ({
          ...lesson,
          selected: !action.checked,
        })),
      };

    default:
      return state;
  }
};

export default lessonListReducer;
