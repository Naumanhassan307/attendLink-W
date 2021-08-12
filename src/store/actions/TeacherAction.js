
import {
  ADD_TEACHER,
  DEL_TEACHER,
  DEL_ALL_TEACHER,
  FETCH_Total_TEACHER_ATT,
  FETCH_ALL_TEACHER,
  FETCH_Total_TEACHER,
} from "../TypeConstant";

import { db } from "../../config/firebase/Firebase";


export const AddTeacherAct = (data) => async (dispatch) =>{
   
console.log("data in add act",data);
    try {
      let res = await db.collection("AddTeacher").add(data);
      console.log("response ", await res); 
      
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
export const FetchTotalTeacherAct = (setLoading) => async (dispatch) => {
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

  
  console.log("Fetch Total teacher data in action =>", Array);
  

    dispatch({
      type: FETCH_Total_TEACHER,
      payload: Array,
    });
  } catch (error) {
    console.log("error", error);
  } finally {
    setLoading(false);
  }
};

export const FetchTodayAttendance = () => async (dispatch) => {
  try {
    
    const fetchData = await db
      .collection("TeacherAttend")
      .doc("wbyvJhy8Fxdrt1Dx3JTX")
      .collection(new Date().toISOString().split("T")[0])
      .get();
    console.log("FetchTodayAttendance",fetchData);
     let Array = [];
     fetchData.forEach((doc) => {
       Array.push({
         ...doc.data(),
         tchDocId: doc.id,
       });
     });
    console.log("Fetch Total Attendance data in action =>", Array);

    dispatch({
      type: FETCH_Total_TEACHER_ATT,
      payload: Array,
    });
  } catch (error) {
    console.log("error", error);
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