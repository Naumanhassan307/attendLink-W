
import { useState } from "react";
import { useDispatch } from "react-redux";
import { LogInAct } from "../../store/actions/AuthAction";

function useLogin(){
    const dispatch = useDispatch()

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const ctaLoginHandler = () =>{

        if(email === "" || pass === ""){
            alert("Please Fil All Fields!");
            return;
        }else{

            dispatch(LogInAct(email, pass));
        }
        
    }
    
    return [setEmail, setPass, ctaLoginHandler];
}
export default useLogin