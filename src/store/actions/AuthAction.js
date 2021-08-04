import { LOG_IN, LOG_OUT } from "../TypeConstant";
import { auth } from "../../config/firebase/Firebase";

export const LogInAct = (email, password) => async (dispatch) => {
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
export const LogOutAct = () => async (dispatch) => {
  try {
    await auth.signOut();

    dispatch({
      type: LOG_OUT,
    });
    alert("User Successfully Logout!");
  } catch (error) {
    console.log("Error is", error);
    
  }
};
