import { useState } from "react";
import { useDispatch } from "react-redux";
import { AddTeacherAct, ImageUpload } from "../../store/actions/TeacherAction";

import QRCode from "qrcode";

export function useAddTeacher() {
  const [resName, setResName]= useState("")
  const [resDetail, setResDetail]= useState("")
  const [resCity, setResCity]= useState("")
  const [resCountry, setResCountry]= useState("")
  const [resImg, setResImg]= useState("")
  
  const resId = `RES-${Math.floor(Math.random() * 10000)}`;
  
  let restaurent = {};

  const dispatch = useDispatch();

  
   const ctaImageHandler = (e) => {
     console.log("image handler e=> ", e.target.files[0]);
     if (e.target.files[0]) {
       setResImg(e.target.files[0]);
     }
     console.log("image handler ", resImg);
   };


   

  const ctaSubmitHander = async () => {
    if (
      resName === "" ||
      resDetail === "" ||
      resCity === "" ||
      resCountry === "" 
      // resImg === ""
    ) {
      alert("Please Fil All Fields!");
      return;
    } else {
      
      
        restaurent = {
          id: `${resId}`,
          date: new Date().toISOString().split("T")[0],
          time: new Date().toLocaleTimeString(),
          name: resName.toUpperCase(),
          detail: resDetail,
          city: resCity,
          country: resCountry,
          
        };
        console.log("Teacher on OBJ", restaurent);
        // dispatch(ImageUpload(resImg));
        dispatch(AddTeacherAct(restaurent, resImg));

        alert("Record Successfully Saved!");
      

      
    }
  };

  return [
    setResName,
    setResDetail,
    setResCity,
    setResCountry,
    setResImg,
    ctaSubmitHander,
    ctaImageHandler,
  ];
}
