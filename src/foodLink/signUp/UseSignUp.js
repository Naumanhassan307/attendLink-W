import { useState } from "react"
import { useDispatch } from "react-redux"
import { SignUpAct } from "../../store/actions/SignUpAct"


function UseSignUp(){
    const [userName, setUserName] = useState("")
    const [userEmail, setUserEmail] = useState("")
    const [userPhone, setUserPhone] = useState("")
    const [userCountry, setUserCountry] = useState("")
    const [userCity, setUserCity] = useState("")
    const [userPassword, setUserPassword] = useState("");
    const dispatch = useDispatch();
    const ctaSignupHandler=()=>{

        
        if(userName === "" || userEmail === "" || userPhone === "" || userCountry === "" || userCity ==="" ||userPassword === ""){
            alert("Please Fill All Fields!")
            return
        }else{
            let signUpUser = {
              name: userName,
              email: userEmail,
              phone: userPhone,
              country: userCountry,
              city: userCity,
              Password: userPassword,
            };
            
            dispatch(SignUpAct(signUpUser));
        
        setUserName("");
        setUserEmail("");
        setUserPhone("");
        setUserCountry("");
        setUserCity("");
        setUserPassword("");
        }

        
        
    }
    
    return [
      userName,
      setUserName,
      userEmail,
      setUserEmail,
      userPhone,
      setUserPhone,
      userCountry,
      setUserCountry,
      userCity,
      setUserCity,
      userPassword,
      setUserPassword,
      ctaSignupHandler,
    ];
}
export default UseSignUp