import { combineReducers } from "redux";
import TeacherReducer from "./reducers/TeacherReducer";
import AuthReducer  from "./reducers/AuthReducer";

const RootReducer = combineReducers({
  TeacherReducer,
  AuthReducer,
});
export default RootReducer;
