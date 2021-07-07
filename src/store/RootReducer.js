import { combineReducers } from "redux";
import TeacherReducer from "./reducers/TeacherReducer";

const RootReducer = combineReducers({
  TeacherReducer,
});
export default RootReducer;
