import React from "react";
import TextField from "@material-ui/core/TextField";

import Departments from "./departments/Departments";
import Gender from "./gender/Gender";
import BlueButton from "../../constants/button/Button";

import "./AddTeacherStyle.css";
import {useAddTeacher} from "./useAddTeacher"

function AddTeacher() {
  const [setTchName, setTchFName, setTchGender, setTchDepart, ctaQrHandler, ctaSubmitHander, empty] = useAddTeacher();
  return (
    <>
      <div className="head-div">Add Teacher</div>

      <div className="my-outer-class">
        <div className="my-inner-class">
          <TextField
            id="basic"
            autoComplete="off"
            label="Teacher Name"
            required
            onChange={(e) => {
              setTchName(e.target.value);
            }}
          />
        </div>
        <div className="my-inner-class">
          <TextField
            id="basic"
            autoComplete="off"
            label="Teacher Father Name"
            required
            onChange={(e) => {
              setTchFName(e.target.value);
            }}
          />
        </div>

        <div className="my-inner-class">
          <Gender setTchGender={setTchGender} />
        </div>
        <div className="my-inner-class">
          <Departments setTchDepart={setTchDepart} />
        </div>
      </div>

      <div className="my-inner-qrbtn">
        <BlueButton txt="QR Code" cta={ctaQrHandler} />
      </div>
     

      <div className="my-inner-btn">
        <BlueButton txt="Submit" cta={ctaSubmitHander} />
        
      </div>
    </>
  );
}
export default AddTeacher;
