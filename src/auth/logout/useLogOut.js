import { useDispatch } from "react-redux";
import { LogOutAct } from "../../store/actions/AuthAction";

function useLogout(){
    const dispatch = useDispatch()
    const ctaLogoutHandler = () =>{

        dispatch(LogOutAct())

    }
    return [ctaLogoutHandler];
}
export default useLogout