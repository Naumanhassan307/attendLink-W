import React from "react";
import TextField from "@material-ui/core/TextField";

import Departments from "./departments/Departments";
import Gender from "./gender/Gender";
import BlueButton from "../../constants/button/Button";

import "./AddTeacherStyle.css";
import { useAddTeacher } from "./useAddTeacher";

function AddTeacher() {
  const [
    setTchName,
    setTchFName,
    setTchEmail,
    setTchGender,
    setTchDepart,
    ctaQrHandler,
    ctaSubmitHander,
    allow,
    tchName,
    tchFName,
    tchGender,
    tchDepart,
  ] = useAddTeacher();
  return (
    <>
      <h5 style={{ textAlign: "right", marginRight: 15 }}>
        Developed By: Nauman Hassan
      </h5>
      <div className="head-div">Add Restaurent</div>

      <div className="my-outer-class">
        <div className="my-inner-class">
          <TextField
            id="basic"
            autoComplete="off"
            label="Restaurent Name"
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
            label="Restaurent Detail"
            required
            onChange={(e) => {
              setTchFName(e.target.value);
            }}
          />
        </div>
        {/* <div className="my-inner-class">
          <TextField
            id="basic"
            autoComplete="off"
            label="E-mail"
          
            required
            onChange={(e) => {
              setTchEmail(e.target.value);
            }}
          />
        </div> */}

        <div className="my-inner-class">
          <Gender setTchGender={setTchGender} />
        </div>
        <div className="my-inner-class">
          <Departments setTchDepart={setTchDepart} />
        </div>
        <div className="my-inner-class">
        <input type="file" />
      </div>

      </div>
      
      {/* <div className="my-inner-qrbtn">
        <BlueButton txt="QR Code" cta={ctaQrHandler} />
      </div> */}

      <div className="my-inner-btn">
        <BlueButton txt="Submit" cta={ctaSubmitHander} />
      </div>
    </>
  );
}
export default AddTeacher;
