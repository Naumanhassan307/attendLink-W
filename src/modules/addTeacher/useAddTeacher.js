import { useState } from "react";
import { useDispatch } from "react-redux";

import { AddTeacherAct } from "../../store/actions/TeacherAction";

export function useAddTeacher() {
  const [tchName, setTchName] = useState("");
  const [tchFName, setTchFName] = useState("");
  const [tchGender, setTchGender] = useState("");
  const [tchDepart, setTchDepart] = useState("");
  const [qr, setQr] = useState("QR CODE");

  const dispatch = useDispatch();
  let teacher = {};
  const ctaQrHandler = () => {
    teacher = {
      id: `TCH-${Math.floor(Math.random() * 10000)}`,
      date: new Date().toISOString().split("T")[0],
      time: new Date().toLocaleTimeString(),
      name: tchName,
      fName: tchFName,
      gender: tchGender,
      depart: tchDepart,
      code: qr,
    };

    console.log("Teacher on OBJ", teacher);
    // setTchName("")
    // setTchFName("")
    // setTchGender("")
    // setTchDepart("")
    // setQr("")
  };

  const ctaSubmitHander = () => {
    dispatch(AddTeacherAct(teacher));

    setTchName("");
    setTchFName("");
    setTchGender("");
    setTchDepart("");
    setQr("");
  };

  return [
    setTchName,
    setTchFName,
    setTchGender,
    setTchDepart,
    ctaQrHandler,
    ctaSubmitHander,
  ];
}
