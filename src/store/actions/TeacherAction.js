
import { ADD_TEACHER, DEL_TEACHER, DEL_ALL_TEACHER, FETCH_ALL_TEACHER } from "../TypeConstant";

import { db } from "../../config/firebase/Firebase";

export const AddTeacherAct = (data) => async (dispatch) =>{
   
console.log("data in add act",data);
    try {
      let res = await db.collection("AddTeacher").add(data);
      console.log("response ", await res); 
      // const apiData = await res.data();
      dispatch({
        type: ADD_TEACHER,
        payload: data,
      });
      
    } catch (error) {
      console.log("Error in add data", error);
    }
}

export const FetchTeacherAct = () => async (dispatch) =>{
   try {
     let fetchData = await db.collection("AddTeacher").get();

     let Array = [];
     fetchData.forEach((doc) => {
       Array.push({
         ...doc.data(),
         cardId: doc.id,
       });
     });

     console.log("Fetch data in action =>", Array);

     dispatch({
       type: FETCH_ALL_TEACHER,
       payload: Array,
     });
   } catch (error) {
     console.log("error", error);
   }

}


export const DelTeacherAct = (data) =>{
    console.log(" Del Teacher in Action ", data);
    return {
      type: DEL_TEACHER,
      payload: data,
    };
}