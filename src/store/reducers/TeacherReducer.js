
import { ADD_TEACHER, DEL_TEACHER, DEL_ALL_TEACHER } from "../TypeConstant";

const initialState ={

    teachers: []
}

function TeacherReducer(state = initialState, action){
    switch (action.type) {
      case ADD_TEACHER:{
          console.log("Reducer running...");
          return{

          }
      }
        

      default:
        return state;
    }

}
export default TeacherReducer;