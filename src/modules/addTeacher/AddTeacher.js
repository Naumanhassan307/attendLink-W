import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import Departments from './departments/Departments';
import Gender from "./gender/Gender";
import BlueButton from "../../constants/button/Button"

import "./AddTeacherStyle.css"



const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function AddTeacher() {
    
  return (
    <>
      <div className="head-div">Add Teacher</div>
     
      <div className="my-outer-class">
        <div className="my-inner-class">
          <TextField id="basic" label="Teacher Name" required />
        </div>
        <div className="my-inner-class">
          <TextField id="basic" label="Teacher Father Name" required />
        </div>

        <div className="my-inner-class">
          <Gender />
        </div>
        <div className="my-inner-class">
          <Departments />
        </div>
      </div>
      <div className="my-inner-qrbtn">
        <BlueButton txt="QR Code"/>
      </div>
      <div className="my-inner-btn">
        <BlueButton txt="Submit"/>
      </div>
      
    </>
  );
}
export default AddTeacher;




