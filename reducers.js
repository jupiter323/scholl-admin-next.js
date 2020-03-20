import { combineReducers } from 'redux';
import instructorReducer from './components/Instructor/index/reducers';
import studentReducer from "./components/Student/index/reducers";
import classesReducer from './components/Classes/index/reducers';
import userReducer from './components/User/index/reducers';
import lessonListReducer from './components/Student/DetailLessonList/index/reducers';


export default combineReducers({
  instructorReducer,
  studentReducer,
  classesReducer,
  userReducer
});
