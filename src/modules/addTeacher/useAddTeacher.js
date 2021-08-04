import { useState } from "react";
import { useDispatch } from "react-redux";
import { AddTeacherAct } from "../../store/actions/TeacherAction";

import QRCode from "qrcode";

export function useAddTeacher() {
  const [tchName, setTchName] = useState("");
  const [tchFName, setTchFName] = useState("");
  const [tchEmail, setTchEmail] = useState("");
  const [tchGender, setTchGender] = useState("");
  const [tchDepart, setTchDepart] = useState("");

  const tchId = `TCH-${Math.floor(Math.random() * 10000)}`;
  let qr = "";
  let teacher = {};

  const dispatch = useDispatch();

  const ctaQrHandler = async () => {
    try {
      qr = await QRCode.toDataURL(`${tchId}-${tchName.toUpperCase()}`);
      console.log("Qr code res", qr);
    } catch (error) {
      console.log("QR code error", error);
    }
    // setAllow(true)
  };

  const ctaSubmitHander = async () => {
    if (
      tchName === "" ||
      tchFName === "" ||
      tchEmail === "" ||
      tchGender === "" ||
      tchDepart === ""
    ) {
      alert("Please Fil All Fields!");
      return;
    } else {
      ctaQrHandler();
      setTimeout(() => {
        console.log("qr link after call", qr);
        teacher = {
          id: tchId,
          date: new Date().toISOString().split("T")[0],
          time: new Date().toLocaleTimeString(),
          name: tchName.toUpperCase(),
          email: tchEmail,
          fName: tchFName.toUpperCase(),
          gender: tchGender,
          depart: tchDepart,
          code: qr,
        };
        console.log("Teacher on OBJ", teacher);

        dispatch(AddTeacherAct(teacher));

        alert("Record Successfully Saved!");
      }, 1000);

      setTchName("");
      setTchFName("");
      setTchGender("");
      setTchEmail("")
      setTchDepart("");
    }
  };

  return [
    setTchName,
    setTchFName,
    setTchEmail,
    setTchGender,
    setTchDepart,
    ctaQrHandler,
    ctaSubmitHander,
    tchName,
    tchFName,
    tchGender,
    tchDepart,
  ];
}
