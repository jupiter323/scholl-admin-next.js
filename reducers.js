import { combineReducers } from 'redux';
import instructorReducer from './components/Instructor/index/reducers';
import studentReducer from "./components/Student/index/reducers";


export default combineReducers({
    instructorReducer,
    studentReducer,
});
