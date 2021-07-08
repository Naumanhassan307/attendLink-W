
import { ADD_TEACHER, DEL_TEACHER, DEL_ALL_TEACHER } from "../TypeConstant";

export const AddTeacherAct = (data) =>{
    console.log("Teacher in Action ", data);
    return {
      type: ADD_TEACHER,
      payload: data,
    };
}