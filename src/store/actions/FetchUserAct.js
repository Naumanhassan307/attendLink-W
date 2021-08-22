import {
  
  FETCH_ALL_TEACHER,
  
} from "../TypeConstant";

import { db } from "../../config/firebase/Firebase";

export const FetchUserAct = () => async (dispatch) => {
  try {
    let fetchData = await db.collection("signupUser").get();

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
  }
};
