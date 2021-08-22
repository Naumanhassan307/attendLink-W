
import {auth, db} from "../../config/firebase/Firebase"


export const SignUpAct = (data) => async dispatch => {
    console.log("data i naction", data);
  try {
    const signupApi = await auth.createUserWithEmailAndPassword(
      data.email,
      data.Password,
    );

    let createdUser = {
      cUserUid: signupApi.user.uid,
      cUsername: data.name,
      cUseremail: data.email,
      cUserphone: data.phone,
      cUsercountry: data.country,
      cUsercity: data.city,
    };

    dispatch(AddUserAct(createdUser));

    // dispatch(
    //     {
    //         type: "CREATED_USER",
    //         payload: createdUser,
    //     }
    // )
    
    console.log('Signup res', signupApi.user.uid);
    alert('User Successfully Registered!');
  } catch (error) {
    console.log('error in signUp', error.code);
    switch (error.code) {
      case 'auth/invalid-email':
        alert('Please enter valid E-mail!');
        break;
      case 'auth/email-already-in-use':
        alert('That email address is already in use!');
        break;
      case 'auth/weak-password':
        alert('Password should be atleast 7 characters!');
        break;
      default:
        break;
    }
  }
};

export const AddUserAct = (data) => async (dispatch) => {
  console.log("data in add act", data);
  try {
    let res = await db.collection("signupUser").add(data);
    console.log("response ", await res);

    // dispatch({
    //   type: ADD_TEACHER,
    //   payload: data,
    // });
  } catch (error) {
    console.log("Error in add data", error);
  }
};

