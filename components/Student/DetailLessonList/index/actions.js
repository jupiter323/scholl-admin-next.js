import { FETCH_LESSON_LIST, FETCH_LESSON_LIST_SUCCESS, FETCH_LESSON_LIST_FAIL } from "./constants";

// Watcher
export const getLessonList = () => ({
  type: FETCH_LESSON_LIST,
});
