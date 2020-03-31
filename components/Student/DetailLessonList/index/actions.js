import {
  FETCH_LESSON_LIST,
  CHECKED_LESSON,
  CHECK_ALL_LESSONS,
  UNCHECK_ALL_LESSONS,
} from "./constants";

// Watcher
export const getLessonList = () => ({
  type: FETCH_LESSON_LIST,
});

export const checkLesson = (index) => ({
  type: CHECKED_LESSON,
  index,
});
export const checkAllLessons = (checked) => ({
  type: CHECK_ALL_LESSONS,
  checked,
});
export const unCheckAllLessons = () => ({
  type: UNCHECK_ALL_LESSONS,

});
