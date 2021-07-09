
import {
  ADD_TEACHER,
  DEL_TEACHER,
  DEL_ALL_TEACHER,
  FETCH_ALL_TEACHER,
  FETCH_Total_TEACHER,
} from "../TypeConstant";

const initialState ={

    teachers: []
}

function TeacherReducer(state = initialState, action){
    switch (action.type) {
      case ADD_TEACHER: {
        console.log("Teacher in Reducer", action.payload);
        return {
          ...state,
          teachers: [...state.teachers, action.payload],
        };
      }
      case DEL_TEACHER: {
        console.log("Teacher ID in Reducer", action.payload);

        const newTeachers = state.teachers.filter((item) => {
          if (item.id !== action.payload) return item;
        });

        return {
          ...state,
          teachers: [...newTeachers],
        };
      }
      case FETCH_ALL_TEACHER: {
        return {
          ...state,
          // teachers: [action.payload],
          teachers: action.payload,
        };
      }
      case FETCH_Total_TEACHER: {
        return {
          ...state,
          // teachers: [action.payload],
          teachers: action.payload,
        };
      }

      default:
        return state;
    }

}
export default TeacherReducer;