
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


export const FetchTeacherAct = (setLoading) => async (dispatch) => {
  try {
    setLoading(true);
    let fetchData = await db.collection("AddTeacher").get();

    let Array = [];
    fetchData.forEach((doc) => {
      Array.push({
        ...doc.data(),
        tchDocId: doc.id,
      });
    });

    console.log("Fetch data in action =>", Array);

    dispatch({
      type: FETCH_ALL_TEACHER,
      payload: Array,
    });
  } catch (error) {
   
    console.log("error", error);
  } finally {
    setLoading(false);
   
  }
};


export const DelTeacherAct = (data, tchDocId, tchName) => async (dispatch) =>{
    console.log(" Del Teacher in Action ", data);
    console.log(" DeluuId Teacher in Action ", tchDocId);


    try {

      const alt = ` ${tchName}   ${data}  wil be Delete!`;
      alert( alt);
        await db.collection("AddTeacher").doc(tchDocId).delete();
    

      await dispatch({
        type: DEL_TEACHER,
        payload: data,
      });
      alert("Data Removed Successfully!");
      
    } catch (error) {
      console.log("Error during delete teacher", error);
    }


    
}