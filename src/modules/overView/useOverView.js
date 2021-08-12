import { useState } from "react";
import { useSelector } from "react-redux";





function useOverView(){
    const lengthofTeacher = useSelector((store) => store.TeacherReducer.teachers.length);
    const lengthofTeacherAtt = useSelector((store) => store.TeacherReducer.todayAtt.length);
   
const [loading, setLoading] = useState(false);
    
    


    return [lengthofTeacher, loading, setLoading, lengthofTeacherAtt];

}
export default useOverView;