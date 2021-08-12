import { db } from "../../config/firebase/Firebase";



import { FETCH_ONE_TCH_ATT, FETCH_ALL_TCH_ATT } from "../TypeConstant";

export const CheckOneAttendanceAct = (data, setLoading) => async (dispatch) => {
  console.log("check act is fine", data.today);
  console.log("check act is fine", data.newId);
  try {
    const res = await db
      .collection("TeacherAttend")
      .doc("wbyvJhy8Fxdrt1Dx3JTX")
      .collection(data.today)
      .where("newId", "==", data.newId)
      //   .doc(data.newId)
      .get();

    console.log("res is", res);
    let Array = [];
    res.forEach((doc) => {
      Array.push({
        ...doc.data(),
        tchDocId: doc.id,
      });
    });

    console.log("res isn Array", Array.length);
    if(Array.length == 0){
      alert(`${data.newId} was Absent on ${data.today}`)
      return
    }

    dispatch({
      type: FETCH_ONE_TCH_ATT,
      payload: Array,
    });
    setLoading(true)
  } catch (error) {
    console.log("error", error);
  }
};
export const CheckAllAttendanceAct = (data, setLoading) => async (dispatch) => {
  console.log("check act is fine All", data);

  try {
    const res = await db
      .collection("TeacherAttend")
      .doc("wbyvJhy8Fxdrt1Dx3JTX")
      .collection(data)
      .get();

    console.log("res is All", res);
    let Array = [];
    res.forEach((doc) => {
      Array.push({
        ...doc.data(),
        tchDocId: doc.id,
      });
    });

    console.log("res isn Array All ", Array);
     if (Array.length == 0) {
       alert(`All Teacher was Absent on ${data}`);
       return;
     }

    dispatch({
      type: FETCH_ONE_TCH_ATT,
      payload: Array,
    });
    setLoading(true);
  } catch (error) {
    console.log("error", error);
  }
};
