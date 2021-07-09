
import "./OverViewStyle.css"

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import useOverView from "./useOverView";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { FetchTotalTeacherAct } from "../../store/actions/TeacherAction";

import Loader from "../../constants/loader/Loader";

function OverView(){

  const dispatch = useDispatch();
const [lengthofTeacher, loading, setLoading] = useOverView();



useEffect(()=>{
  dispatch(FetchTotalTeacherAct(setLoading));
},[])
  

    return (
      <>
        <h5 style={{textAlign: "right", marginRight: 15}}>Developed By: Nauman Hassan</h5>
        <div className="head-div">Today Overview</div>
        {loading ? (
          <Loader />
        ) : (
          <div className="main-div">
            <div className="child">
              <div className="child-one">Present</div>
              <div style={{ width: 150, height: 150 }} className="child-two">
                <CircularProgressbar
                  minValue={0}
                  maxValue={lengthofTeacher}
                  value={lengthofTeacher - 2}
                  text={lengthofTeacher - 2}
                />
              </div>
            </div>
            <div className="child">
              <div className="child-one">Absent</div>
              <div style={{ width: 150, height: 150 }} className="child-two">
                <CircularProgressbar
                  minValue={0}
                  maxValue={lengthofTeacher}
                  value={1}
                  text={1}
                />
              </div>
            </div>
            <div className="child">
              <div className="child-one">On Leave</div>
              <div style={{ width: 150, height: 150 }} className="child-two">
                <CircularProgressbar
                  minValue={0}
                  maxValue={lengthofTeacher}
                  value={1}
                  text={1}
                />
              </div>
            </div>
            <div className="child">
              <div className="child-one">Total</div>
              <div
                style={{ width: 150, height: 150, color: "#2196f3" }}
                className="child-two"
              >
                <CircularProgressbar
                  minValue={lengthofTeacher}
                  maxValue={lengthofTeacher}
                  value={lengthofTeacher}
                  text={lengthofTeacher}
                />
              </div>
            </div>
          </div>
        )}
      </>
    );

}
export default OverView;