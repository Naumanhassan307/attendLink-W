
import "./OverViewStyle.css"

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";


function OverView(){
    return (
      <>
        <div className="head-div">Today Overview</div>
        <div className="main-div">
          <div className="child">
            <div className="child-one">Present</div>
            <div style={{ width: 150, height: 150 }} className="child-two">
              <CircularProgressbar
                minValue={0}
                maxValue={100}
                value={85}
                text={85}
              />
            </div>
          </div>
          <div className="child">
            <div className="child-one">Absent</div>
            <div style={{ width: 150, height: 150 }} className="child-two">
              <CircularProgressbar
                minValue={0}
                maxValue={100}
                value={5}
                text={5}
              />
            </div>
          </div>
          <div className="child">
            <div className="child-one">On Leave</div>
            <div style={{ width: 150, height: 150 }} className="child-two">
              <CircularProgressbar
                minValue={0}
                maxValue={100}
                value={10}
                text={10}
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
                minValue={0}
                maxValue={100}
                value={100}
                text={100}
              />
            </div>
          </div>
        </div>
      </>
    );

}
export default OverView;