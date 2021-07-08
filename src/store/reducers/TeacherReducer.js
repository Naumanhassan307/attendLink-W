
import { ADD_TEACHER, DEL_TEACHER, DEL_ALL_TEACHER } from "../TypeConstant";

const initialState ={

    teachers: []
}

function TeacherReducer(state = initialState, action){
    switch (action.type) {
      case ADD_TEACHER: {
        //   console.log("Teacher in Reducer", action.payload);
        return {
          ...state,
          teachers: [...state.teachers, action.payload],
        };
      }
      case DEL_TEACHER: {
        console.log("Teacher ID in Reducer", action.payload);
        
        // const newTeachers = state.teachers.filter((item) => console.log("new teachers are", item));
        const newTeachers = state.teachers.filter((item) => {if(item.id !== action.payload) return item});
                            
        
        return{
            ...state,
            teachers: [...newTeachers],
        }
      }

      default:
        return state;
    }

}
export default TeacherReducer;