import {auth} from  "../../config/firebase/Firebase"
import { LOG_IN } from "../TypeConstant";
export const ResLogInAct = (email, password) => async (dispatch) => {
  try {
    let res = await auth.signInWithEmailAndPassword(email, password);
    console.log("response is ", res.user);
    var user = res.user;

    dispatch({
      type: LOG_IN,
      payload: user,
    });
  } catch (error) {
    console.log("Error is", error);
    alert("User Not Find!");
  }
};


