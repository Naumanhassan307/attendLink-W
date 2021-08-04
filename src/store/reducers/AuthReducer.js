
import { LOG_IN, LOG_OUT } from "../TypeConstant";



const initialState = {
  isLogIn : false, 
  user: null,
};

function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case LOG_IN: {
        return{
            ...state,
            isLogIn: true,
            user: action.payload,
        }
    }
    case LOG_OUT: {
        return{
            ...state,
            isLogIn: false,
            user: null,
        }
    }

    default:
      return state;
  }
}
export default AuthReducer;