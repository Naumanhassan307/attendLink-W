import { useState } from "react";
import { useDispatch } from "react-redux";
import { ResLogInAct } from "../../store/actions/ResLoginAct";


function UseSignIn() {
  
  const [userEmail, setUserEmail] = useState("");
  
  const [userPassword, setUserPassword] = useState("");
  const dispatch = useDispatch();
  const ctaSignInHandler = () => {
    if (
     
      userEmail === "" ||
      userPassword === ""
    ) {
      alert("Please Fill All Fields!");
      return;
    } else {
    //   let signInUpUser = {
       
    //     email: userEmail,
    //     Password: userPassword,
    //   };

      dispatch(ResLogInAct(userEmail, userPassword));

      
      setUserEmail("");
      setUserPassword("");
    }
  };

  return [
    
    userEmail,
    setUserEmail,
    userPassword,
    setUserPassword,
    ctaSignInHandler,
  ];
}
export default UseSignIn;
