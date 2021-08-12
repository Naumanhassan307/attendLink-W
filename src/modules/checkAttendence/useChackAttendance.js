import { Today } from "@material-ui/icons";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CheckAllAttendanceAct, CheckOneAttendanceAct } from "../../store/actions/CheckAttendanceAct";

function UseCheckAttendance(){
    const [tchId, setTchId] = useState("")
    const [date, setDate] = useState("")
    const [loading, setLoading] = useState(false)

    const dispatch=useDispatch()

    const ctaOneTch=()=>{
        if(tchId === "" || date === ""){
            alert("Please Fill All Fields!")
            return
        }else{
            let obj = {
              newId: tchId.toUpperCase(),
              today: date,
            };
            console.log("One", obj);
            dispatch(CheckOneAttendanceAct(obj, setLoading));
        
        }
        
    }


    const ctaAllTch=()=>{
        if(date === ""){
            alert("Please Fill All Fields!");
            return
        }else{

            dispatch(CheckAllAttendanceAct(date, setLoading));
        }
    }

    const oneTch = useSelector((store) => store.TeacherReducer.oneTchAtt);
   
    // const allTch = useSelector((store) => store.TeacherReducer.allTchAtt);
    console.log("One techer from store", oneTch);
    // console.log("All techer from store", allTch);
    return [setTchId, setDate, ctaOneTch, ctaAllTch, loading, oneTch];
    

}
export default UseCheckAttendance;