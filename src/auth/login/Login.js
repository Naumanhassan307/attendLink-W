import Loader from "../../constants/loader/Loader"

import TextField from "@material-ui/core/TextField";
import BlueButton from "../../constants/button/Button";
import useLogin from "./useLogin";

function Login() {

  const [setEmail, setPass, ctaLoginHandler] = useLogin();


  return (
    <>
      <h5 style={{ textAlign: "right", marginRight: 15 }}>
        Developed By: Nauman Hassan
      </h5>
      
      

      <div className="my-outer-class">
        <div className="my-inner-class">
          <TextField
            id="basic"
            autoComplete="off"
            label="E-mail"
            type="email"
            required
            onChange={(e)=>{setEmail(e.target.value)}}
          />
        </div>
        <div className="my-inner-class">
          <TextField
            id="basic"
            autoComplete="off"
            label="Password"
            type="password"
            required
            onChange={(e)=>{setPass(e.target.value)}}
          />
        </div>

        <div className="my-inner-btn">
          <BlueButton txt="Login" cta={ctaLoginHandler} />
        </div>
      </div>
    </>
  );
}
export default Login;
