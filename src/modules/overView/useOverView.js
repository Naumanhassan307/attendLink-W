import { useState } from "react";
import { useSelector } from "react-redux";





function useOverView(){
    const lengthofTeacher = useSelector((store) => store.TeacherReducer.teachers.length);
   
const [loading, setLoading] = useState(false);
    
    


    return [lengthofTeacher, loading, setLoading];

}
export default useOverView;